import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fetchYouTubeAudio } from '../utils/fetchYouTubeAudio.js';
import { transcribeAudio } from '../utils/transcribeAudio.js';
import { generateQuizFromTranscript } from '../utils/quiz-generator.js';
import Quiz from '../models/Quiz.js';

dotenv.config();

const testQuizStorage = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');

        // Step 1: Download YouTube video and get info
        const videoUrl = 'https://www.youtube.com/watch?v=Jg3Fo4WD8XE';
        console.log('\nStep 1: Processing video:', videoUrl);
        const audioPath = await fetchYouTubeAudio(videoUrl);
        
        // Get video details for storage
        const videoName = audioPath.split('/').pop().replace('.mp3', '');
        
        // Step 2: Generate transcript
        console.log('\nStep 2: Generating transcript...');
        const transcript = await transcribeAudio(audioPath);
        console.log('Transcript generated:', transcript.substring(0, 100) + '...');

        // Step 3: Generate quiz questions
        console.log('\nStep 3: Generating quiz questions...');
        const questions = await generateQuizFromTranscript(transcript);
        console.log('Generated questions:', questions);

        // Step 4: Save to database
        console.log('\nStep 4: Saving quiz to database...');
        const quiz = await Quiz.create({
            topic: 'Chemistry Basics',
            videoName: videoName,
            videoURL: videoUrl,
            difficulty: 'Medium',
            questions: questions,
            totalQuestions: questions.length,
            createdBy: new mongoose.Types.ObjectId() // Dummy user ID for testing
        });

        console.log('\nQuiz saved successfully!');
        console.log('Quiz ID:', quiz._id);
        console.log('Total questions:', quiz.totalQuestions);

        // Step 5: Verify storage
        console.log('\nStep 5: Verifying storage...');
        const savedQuiz = await Quiz.findById(quiz._id);
        console.log('Retrieved quiz from database:', {
            id: savedQuiz._id,
            topic: savedQuiz.topic,
            totalQuestions: savedQuiz.totalQuestions,
            createdAt: savedQuiz.createdAt
        });

    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        // Cleanup
        await mongoose.connection.close();
        console.log('\nDatabase connection closed');
    }
};

console.log('Starting quiz storage test...');
testQuizStorage();

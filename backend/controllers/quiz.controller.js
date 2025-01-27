import Quiz from '../models/Quiz.js';
import { generateQuizFromTranscript } from "../utils/quiz-generator.js";
import { fetchYouTubeAudio } from '../utils/fetchYouTubeAudio.js';
import { transcribeAudio } from '../utils/transcribeAudio.js';

export const createQuiz = async (req, res) => {
    try {
        const { videoUrl, topic, difficulty = 'Medium' } = req.body;

        // Step 1: Download and process video
        console.log('Processing video:', videoUrl);
        const audioPath = await fetchYouTubeAudio(videoUrl);
        const videoName = audioPath.split('/').pop().replace('.mp3', '');

        // Step 2: Generate transcript
        console.log('Generating transcript...');
        const transcript = await transcribeAudio(audioPath);

        // Step 3: Generate quiz
        console.log('Generating quiz questions...');
        const questions = await generateQuizFromTranscript(transcript);

        // Step 4: Save to database
        const quiz = await Quiz.create({
            topic: topic || videoName,
            videoName,
            videoURL: videoUrl,
            difficulty,
            questions,
            totalQuestions: questions.length,
            createdBy: req.user._id
        });

        res.status(201).json({
            success: true,
            message: "Quiz created successfully",
            quiz
        });
    } catch (err) {
        console.error('Quiz creation failed:', err);
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

export const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

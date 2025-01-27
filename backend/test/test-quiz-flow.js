import { fetchYouTubeAudio } from '../utils/fetchYouTubeAudio.js';
import { transcribeAudio } from '../utils/transcribeAudio.js';
import { generateQuizFromTranscript } from '../utils/quiz-generator.js';
import fs from 'fs';

const testQuizFlow = async () => {
    try {
        // Step 1: Download YouTube video audio
        console.log('Step 1: Downloading YouTube audio...');
        const videoUrl = 'https://www.youtube.com/watch?v=Jg3Fo4WD8XE'; // Use a short educational video
        const audioPath = await fetchYouTubeAudio(videoUrl);
        console.log('Audio downloaded to:', audioPath);

        // Step 2: Transcribe the audio
        console.log('\nStep 2: Transcribing audio...');
        const transcript = await transcribeAudio(audioPath);
        console.log('\nTranscription:', transcript.substring(0, 200) + '...');

        // Step 3: Generate quiz from transcript
        console.log('\nStep 3: Generating quiz...');
        const quiz = await generateQuizFromTranscript(transcript);
        console.log('\nGenerated Quiz:', JSON.stringify(quiz, null, 2));

        // Step 4: Cleanup
        console.log('\nStep 4: Cleaning up...');
        fs.unlinkSync(audioPath);
        console.log('Temporary audio file removed');

    } catch (error) {
        console.error('Test failed:', error.message);
        console.error('Full error:', error);
    }
};

console.log('Starting complete quiz generation flow test...');
testQuizFlow();

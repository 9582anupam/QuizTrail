import { fetchYouTubeAudio } from '../utils/yt-fetcher.js';
import { transcribeAudio } from '../utils/audio-to-text.js';
import fs from 'fs';

const testTranscription = async () => {
    try {
        // 1. First download a YouTube video
        console.log('Step 1: Downloading YouTube audio...');
        const videoUrl = 'https://www.youtube.com/watch?v=jNQXAC9IVRw'; // Short video
        const audioPath = await fetchYouTubeAudio(videoUrl);
        console.log('Audio downloaded to:', audioPath);

        // 2. Transcribe the downloaded audio
        console.log('\nStep 2: Transcribing audio...');
        const transcript = await transcribeAudio(audioPath);
        console.log('\nTranscription result:', transcript);

        // 3. Clean up: Remove the audio file
        console.log('\nStep 3: Cleaning up...');
        fs.unlinkSync(audioPath);
        console.log('Temporary audio file removed');

    } catch (error) {
        console.error('Test failed:', error.message);
        console.error('Full error:', error);
    }
};

// Add to package.json scripts
console.log('Starting transcription test...');
testTranscription();

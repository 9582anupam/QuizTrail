import { fetchYouTubeAudio } from '../utils/yt-fetcher.js';

const testYouTubeFetcher = async () => {
    try {
        // Using a shorter, public domain video
        const videoUrl = 'https://www.youtube.com/watch?v=jNQXAC9IVRw'; // "Me at the zoo" (YouTube's first video)
        console.log('Testing with video URL:', videoUrl);
        console.log('Starting audio fetch...');
        
        const audioPath = await fetchYouTubeAudio(videoUrl);
        console.log('Audio downloaded successfully to:', audioPath);
    } catch (error) {
        console.error('Test failed with error type:', error.constructor.name);
        console.error('Error message:', error.message);
        console.error('Full error details:', error);
        if (error.stack) {
            console.error('Stack trace:', error.stack);
        }
    }
};

const validateYouTubeUrl = (url) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return pattern.test(url);
};

console.log('Running YouTube fetcher test...');
testYouTubeFetcher();

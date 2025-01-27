import axios from "axios";
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Constants for Gemini API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = "https://api.gemini.ai/v1/createQuiz";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const cleanJsonString = (text) => {
    // Remove markdown backticks and json keyword
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    // Remove any leading/trailing whitespace
    return cleaned.trim();
};

export const generateQuiz = async (topic, difficulty, numQuestions) => {
    // Basic quiz structure
    return {
        topic,
        difficulty,
        questions: generateQuestions(numQuestions),
        totalQuestions: numQuestions,
    };
};

const generateQuestions = (count) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
        questions.push({
            id: i + 1,
            question: `Sample question ${i + 1}`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: "Option A", // Default correct answer, replace with actual logic
        });
    }
    return questions;
};

export const generateQuizFromTranscript = async (transcript) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Generate 5 multiple choice questions based on this transcript: "${transcript}"
        Return ONLY a JSON array of question objects with this exact format, no markdown or other text:
        [
            {
                "question": "question text here?",
                "options": ["option1", "option2", "option3", "option4"],
                "correctAnswer": "exact text of correct option"
            }
        ]`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log('Raw response from Gemini:', text); // Debug log
        
        const cleanedJson = cleanJsonString(text);
        console.log('Cleaned JSON:', cleanedJson); // Debug log
        
        // Parse the JSON response
        const questions = JSON.parse(cleanedJson);

        return questions.map((q, index) => ({
            id: index + 1,
            ...q
        }));
    } catch (error) {
        console.error("Error generating quiz:", error);
        if (error instanceof SyntaxError) {
            console.error("JSON parsing failed. Raw text:", error.text);
        }
        throw new Error(`Failed to generate quiz: ${error.message}`);
    }
};

export const validateQuizParams = (params) => {
    const { topic, difficulty, numQuestions } = params;

    if (!topic || !difficulty || !numQuestions) {
        throw new Error("Missing required parameters");
    }

    if (numQuestions < 1 || numQuestions > 50) {
        throw new Error("Number of questions must be between 1 and 50");
    }

    return true;
};

import Quiz from '../models/Quiz.js';
import { generateQuizFromTranscript } from "../utils/quiz-generator.js";

export const createQuiz = async (req, res) => {
    const { title, transcript, difficulty = 'medium' } = req.body;
    try {
        const questions = generateQuizFromTranscript(transcript);
        const quiz = await Quiz.create({ 
            topic: title,
            difficulty,
            questions,
            createdBy: req.user._id // Assuming you have authentication middleware
        });
        res.status(201).json({ message: "Quiz created", quiz });
    } catch (err) {
        res.status(400).json({ error: err.message });
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
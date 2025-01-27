const Quiz = require("../models/Quiz");
const { generateQuizFromTranscript } = require("../utils/quiz-generator");

exports.createQuiz = async (req, res) => {
  const { title, transcript } = req.body;
  try {
    const questions = generateQuizFromTranscript(transcript);
    const quiz = await Quiz.create({ title, transcript, questions });
    res.status(201).json({ message: "Quiz created", quiz });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

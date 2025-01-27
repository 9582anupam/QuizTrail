const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: String,
  transcript: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quiz", QuizSchema);

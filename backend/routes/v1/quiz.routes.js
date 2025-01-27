import express from 'express';
import { createQuiz, getQuizzes } from "../../controllers/quiz.controller.js";

const router = express.Router();

router.post("/createQuiz", createQuiz);
router.get("/getQuizzes", getQuizzes);

export default router;

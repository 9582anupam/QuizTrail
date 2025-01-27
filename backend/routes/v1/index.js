import express from "express";
import authRoutes from "./auth.routes.js";
import quizRoutes from "./quiz.routes.js";
import tokenRouter from "./token.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/quizzes", quizRoutes);
router.use("/tokens", tokenRouter);

export default router;

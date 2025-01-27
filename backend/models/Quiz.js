import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    options: [{
        type: String,
        required: true,
        trim: true
    }],
    correctAnswer: {
        type: String,
        required: true,
        trim: true
    }
});

const quizSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        trim: true
    },
    videoName: {
        type: String,
        required: true,
        trim: true
    },
    videoURL: {
        type: String,
        required: true,
        trim: true
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['Easy', 'Medium', 'Hard']
    },
    questions: [questionSchema],
    totalQuestions: {
        type: Number,
        required: true,
        min: 1
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

// Pre-save middleware to update totalQuestions
quizSchema.pre('save', function(next) {
    if (this.questions) {
        this.totalQuestions = this.questions.length;
    }
    next();
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;

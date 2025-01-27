const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Use hashed passwords in production
  tokens: { type: Number, default: 0 },
  quizzesAttempted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
});

module.exports = mongoose.model("User", UserSchema);

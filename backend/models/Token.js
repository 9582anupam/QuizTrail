const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tokens: { type: Number, default: 0 },
});

module.exports = mongoose.model("Token", TokenSchema);

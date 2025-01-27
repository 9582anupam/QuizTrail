const User = require("../models/User");

exports.updateTokens = async (req, res) => {
  const { userId, correctAnswers, wrongAnswers } = req.body;
  try {
    const user = await User.findById(userId);
    const tokens = correctAnswers * 10 - wrongAnswers * 5;
    user.tokens += tokens;
    await user.save();
    res.json({ message: "Tokens updated", tokens: user.tokens });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find()
      .sort({ tokens: -1 })
      .limit(10)
      .select("name tokens");
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

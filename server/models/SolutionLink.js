const mongoose = require('mongoose');

const SolutionLinkSchema = new mongoose.Schema({
  contestId: { type: String, required: true },
  contestName: { type: String, required: true },
  contestPlatform: { type: String, required: true },
  contestUrl: { type: String, required: true },
  youtubeLink: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SolutionLink', SolutionLinkSchema);

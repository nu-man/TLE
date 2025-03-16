
const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  contestId: { type: String, required: true },
  contestName: { type: String, required: true },
  contestPlatform: { type: String, required: true },
  contestUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);

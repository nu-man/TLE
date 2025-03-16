
const mongoose = require('mongoose');

const ContestSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  duration: { type: String, required: true },
  url: { type: String, required: true },
  solutionLink: { type: String, default: "" }
});

module.exports = mongoose.model('Contest', ContestSchema);

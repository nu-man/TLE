// /backend/routes/solutions.js
const express = require('express');
const router = express.Router();
const SolutionLink = require('../models/SolutionLink');

// POST /solutions - Submit a solution link for a contest
router.post('/', async (req, res) => {
  try {
    const solution = new SolutionLink(req.body);
    const savedSolution = await solution.save();
    res.status(201).json({ status: 'success', data: savedSolution });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
});

// GET /solutions - Retrieve all solution links
router.get('/', async (req, res) => {
  try {
    const solutions = await SolutionLink.find().populate('contest');
    res.json({ status: 'success', count: solutions.length, data: solutions });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

module.exports = router;


const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET /contests/codeforces - Retrieve real‑time Codeforces contests
router.get('/codeforces', async (req, res) => {
  try {
    const response = await axios.get('https://competeapi.vercel.app/contests/codeforces');
    const contests = response.data; // Assuming the API returns an array of contest objects
    res.json({ status: 'success', count: contests.length, data: contests });
  } catch (err) {
    console.error('Error fetching Codeforces contests:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// GET /contests/codechef - Retrieve real‑time Codechef contests
router.get('/codechef', async (req, res) => {
  try {
    const response = await axios.get('https://competeapi.vercel.app/contests/codechef');
    const contests = response.data;
    res.json({ status: 'success', count: contests.length, data: contests });
  } catch (err) {
    console.error('Error fetching Codechef contests:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// GET /contests/leetcode - Retrieve real‑time Leetcode contests
router.get('/leetcode', async (req, res) => {
  try {
    const response = await axios.get('https://competeapi.vercel.app/contests/leetcode');
    const contests = response.data;
    res.json({ status: 'success', count: contests.length, data: contests });
  } catch (err) {
    console.error('Error fetching Leetcode contests:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// (Optional) GET /contests - Retrieve aggregated upcoming contests from all platforms
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://competeapi.vercel.app/contests/upcoming');
    const contests = response.data;
    res.json({ status: 'success', count: contests.length, data: contests });
  } catch (err) {
    console.error('Error fetching aggregated contests:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

module.exports = router;


const express = require('express');
const router = express.Router();
const Bookmark = require('../models/Bookmark');

// POST /bookmarks - Add a new bookmark
router.post('/', async (req, res) => {
  try {
    const bookmark = new Bookmark(req.body);
    const savedBookmark = await bookmark.save();
    res.status(201).json({ status: 'success', data: savedBookmark });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
});

// GET /bookmarks - Retrieve all bookmarks
router.get('/', async (req, res) => {
  try {
    const bookmarks = await Bookmark.find(); 
    res.json({ status: 'success', count: bookmarks.length, data: bookmarks });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

module.exports = router;

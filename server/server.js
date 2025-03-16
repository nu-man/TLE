// /backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contestsRoute = require('./routes/contests');
const bookmarksRoute = require('./routes/bookmarks');
const solutionsRoute = require('./routes/solutions');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const PORT = 5000;
const MONGO_URI =  'mongodb+srv://mohdnuman198:numan@tle.des3b.mongodb.net/?retryWrites=true&w=majority&appName=TLE';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mount routes
app.use('/contests', contestsRoute);
app.use('/bookmarks', bookmarksRoute);
app.use('/solutions', solutionsRoute);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Coding Contests API',
    endpoints: {
      '/contests': 'Get all contests',
      '/contests/:platform': 'Get contests filtered by platform',
      '/bookmarks': 'Get/post bookmarks',
      '/solutions': 'Get/post solution links'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

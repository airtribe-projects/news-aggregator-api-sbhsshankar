const express = require('express');
const router = express.Router();
const axios = require('axios');
const authenticateToken = require('../middleware/authMiddleware');
const users = require('../models/userModel');

const NEWS_API_KEY = '3de74e815a1940a5924809c1e2b714c2';

router.get('/news', authenticateToken, async (req, res) => {
  try {
    // Step 1: Find logged-in user
    const user = users.find(u => u.username === req.user.username);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { categories = [], languages = [] } = user.preferences || {};

    // Step 2: Build API URL (e.g., using first category and language)
    const category = categories[0] || 'general';
    const language = languages[0] || 'en';

    const url = `https://newsapi.org/v2/top-headlines?category=${category}&language=${language}&apiKey=${NEWS_API_KEY}`;

    // Step 3: Make API request
    const response = await axios.get(url);
    const articles = response.data.articles;

    // Step 4: Return articles
    res.json({ articles });

  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
});

module.exports = router;

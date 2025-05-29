const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const users = require('../models/userModel');

// GET /preferences - Get logged-in user's preferences
router.get('/preferences', authenticateToken, (req, res) => {
  const user = users.find(u => u.username === req.user.username);
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({ preferences: user.preferences || {} });
});

// PUT /preferences - Update preferences
router.put('/preferences', authenticateToken, (req, res) => {
  const { categories, languages } = req.body;
  const user = users.find(u => u.username === req.user.username);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.preferences = {
    categories: categories || [],
    languages: languages || []
  };

  res.json({ message: 'Preferences updated', preferences: user.preferences });
});

router.get('/test', (req, res) => {
    res.send("test success");
})

module.exports = router;

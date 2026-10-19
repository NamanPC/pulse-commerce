const express = require('express');
const router = express.Router();

// Mock in-memory user store
const users = [];

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  const newUser = { id: users.length + 1, email, createdAt: new Date() };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || password !== 'correct_password') {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // Simulated JWT token
  const token = `fake-jwt-token-for-user-${user.id}`;
  res.json({ token, user: { id: user.id, email: user.email } });
});

module.exports = router;

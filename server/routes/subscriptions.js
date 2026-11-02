const express = require('express');
const router = express.Router();

// Mock Subscription Tiers
const tiers = [
  { id: 'tier_starter', name: 'Starter', price: 29.00, interval: 'month' },
  { id: 'tier_growth', name: 'Growth', price: 99.00, interval: 'month' },
  { id: 'tier_enterprise', name: 'Enterprise', price: 299.00, interval: 'month' }
];

// GET /api/v1/subscriptions/tiers
router.get('/tiers', (req, res) => {
  res.json({ tiers });
});

module.exports = router;

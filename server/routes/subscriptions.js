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

// POST /api/v1/subscriptions/invoices
router.post('/invoices', (req, res) => {
  const { subscriptionId, customerEmail } = req.body;
  if (!subscriptionId || !customerEmail) {
    return res.status(400).json({ error: 'subscriptionId and customerEmail are required' });
  }

  const invoice = {
    invoiceId: `inv_${Date.now()}`,
    subscriptionId,
    customerEmail,
    amountPaid: 99.00,
    currency: 'USD',
    status: 'paid',
    issuedAt: new Date()
  };

  res.status(201).json({ message: 'Invoice generated successfully', invoice });
});

module.exports = router;

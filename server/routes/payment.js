const express = require('express');
const router = express.Router();

// Mock payment transactions database
const transactions = [];

// POST /api/payment/checkout
router.post('/checkout', (req, res) => {
  const { amount, currency = 'USD', paymentMethodId } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Valid payment amount is required' });
  }

  if (!paymentMethodId) {
    return res.status(400).json({ error: 'Payment method ID required' });
  }

  const transaction = {
    id: `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    amount,
    currency,
    status: 'succeeded',
    createdAt: new Date()
  };

  transactions.push(transaction);
  res.status(200).json({ message: 'Payment processed successfully', transaction });
});

module.exports = router;

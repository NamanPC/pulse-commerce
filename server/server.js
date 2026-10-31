const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');

app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'pulse-commerce-api', timestamp: new Date() });
});

// Mock Products endpoint
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Cloud Database Hosting', price: 49.99 },
    { id: 2, name: 'Microservice API Gateway', price: 99.99 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

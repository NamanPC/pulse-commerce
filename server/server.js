const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');

// Security & Audit Middleware (SEC-305)
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '10kb' }));

// Mount API routes with v1 prefix (SEC-305 & DEV-201)
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/payment', paymentRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'pulse-commerce-api', timestamp: new Date() });
});

// Mock Products endpointr
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Cloud Database Hosting', price: 49.99 },
    { id: 2, name: 'Microservice API Gateway', price: 99.99 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

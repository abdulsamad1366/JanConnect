const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const complaintRoutes = require('./routes/complaintRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ 1. ADD THIS HOMEPAGE ROUTE (Must be before error handlers)
app.get('/', (req, res) => {
  res.json({ 
    message: 'JanConnect API is running successfully! 🚀',
    version: '1.0.0',
    status: 'Online'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);

// ✅ 2. Error Handling (Must be at the very bottom)
// If no route is found, show this instead of a crash
app.use((req, res, next) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

module.exports = app;
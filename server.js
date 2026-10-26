const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Database Connected Successfully!'))
  .catch((err) => console.error('❌ Database Connection Error:', err));

// Test Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Business-Connect Backend API!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'API is working fine' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

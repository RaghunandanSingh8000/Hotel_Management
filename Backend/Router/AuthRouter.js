const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes'); // Adjust path if needed

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Health check route
app.get('/', (req, res) => {
  res.send('Hotel Management API is running');
});

// Auth routes
app.use('/api/auth', authRoutes);

// ...add other routes here (bookings, contact, etc.)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
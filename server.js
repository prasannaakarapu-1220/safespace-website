// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/auth', authRoutes);

// Serve static HTML files from views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});
app.get('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'report.html'));
});
app.get('/gps', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'gps.html'));
});
app.get('/emergency', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'emergency.html'));
});
app.get('/rights', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rights.html'));
});
app.get('/helplines', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'helplines.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

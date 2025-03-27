const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Import Models
const Admin = require('./models/Admin');

// Define Carousel Schema
const carouselSchema = new mongoose.Schema({
  title: String,
  description: String,
  buttonText: String,
  buttonLink: String,
  imageId: String,
  imageUrl: String,
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const Carousel = mongoose.model('Carousel', carouselSchema);

// Auth Middleware
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.adminId);
    if (!admin) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Carousel Routes
app.get('/api/carousel', async (req, res) => {
  try {
    const slides = await Carousel.find({ isDeleted: false }).sort('order');
    res.json(slides);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/carousel/active', async (req, res) => {
  try {
    const slides = await Carousel.find({ isActive: true, isDeleted: false }).sort('order');
    res.json(slides);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/carousel', authMiddleware, async (req, res) => {
  try {
    const lastSlide = await Carousel.findOne().sort('-order');
    const order = lastSlide ? lastSlide.order + 1 : 0;
    
    const slide = new Carousel({
      ...req.body,
      order
    });
    
    await slide.save();
    res.status(201).json(slide);
  } catch (error) {
    console.error('Error creating slide:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/carousel/:id', authMiddleware, async (req, res) => {
  try {
    const slide = await Carousel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.json(slide);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/carousel/:id', authMiddleware, async (req, res) => {
  try {
    await Carousel.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.json({ message: 'Slide deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/carousel/:id/restore', authMiddleware, async (req, res) => {
  try {
    const slide = await Carousel.findByIdAndUpdate(
      req.params.id,
      { isDeleted: false },
      { new: true }
    );
    res.json(slide);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/carousel/reorder', authMiddleware, async (req, res) => {
  try {
    const { slideIds } = req.body;
    for (let i = 0; i < slideIds.length; i++) {
      await Carousel.findByIdAndUpdate(slideIds[i], { order: i });
    }
    res.json({ message: 'Slides reordered' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Admin Routes
app.post('/api/admin/login', async (req, res) => {
  try {
    console.log('Login attempt:', req.body); // Debug log
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // Generate JWT
    const token = jwt.sign(
      { adminId: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      adminInfo: {
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Login error:', error); // Debug log
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected Admin Routes
app.get('/api/admin/profile', authMiddleware, async (req, res) => {
  try {
    const admin = req.admin;
    res.json({
      username: admin.username,
      email: admin.email,
      role: admin.role,
      lastLogin: admin.lastLogin
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Set' : 'Not Set');
  console.log('JWT Secret:', process.env.JWT_SECRET ? 'Set' : 'Not Set');
});

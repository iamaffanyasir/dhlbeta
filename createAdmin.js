require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const createAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const adminData = {
      username: 'admin',
      password: 'admin123',
      email: 'admin@dhl.com',
      role: 'admin'
    };

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: adminData.username });
    if (existingAdmin) {
      console.log('Admin user already exists!');
      process.exit(0);
    }

    // Create new admin
    const admin = new Admin(adminData);
    await admin.save();
    console.log('Admin user created successfully!');
    console.log('Username:', adminData.username);
    console.log('Password:', 'admin123');
    console.log('Please change these credentials after first login!');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await mongoose.connection.close();
  }
};

createAdminUser();

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Makes email required
    unique: true,   // Ensures email is unique
    lowercase: true, // Converts email to lowercase automatically before saving
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'] // Email format validation
  },
  password: {
    type: String,
    required: true,  // Makes password required
    minlength: [6, 'Password must be at least 6 characters long'] // Password length validation
  },
  mobile: {
    type: Number,
    required: true,  // Makes mobile number required
    validate: {
      validator: (v) => /^\d{10}$/.test(v), // Validates mobile number as 10 digits
      message: 'Please enter a valid 10-digit mobile number'
    }
  }
}, { timestamps: true }); // Optionally, adds createdAt and updatedAt fields

// Ensure the model is only created once
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;

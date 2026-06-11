const mongoose = require('mongoose');

// Define the structure of a User
const userSchema = mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, 'Please add a name'] 
    },
    email: { 
      type: String, 
      required: [true, 'Please add an email'], 
      unique: true 
    },
    password: { 
      type: String, 
      required: [true, 'Please add a password'] 
    },
    phone: { 
      type: String, 
      required: [true, 'Please add a phone number'] 
    },
    role: { 
      type: String, 
      enum: ['citizen', 'admin'], // A user can only be one of these two
      default: 'citizen' 
    }
  }, 
  { 
    timestamps: true // Automatically adds 'createdAt' and 'updatedAt' fields
  }
);

// Create the Model
const User = mongoose.model('User', userSchema);

module.exports = User;
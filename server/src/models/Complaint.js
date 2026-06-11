const mongoose = require('mongoose');

// Define the structure of a Complaint
const complaintSchema = mongoose.Schema(
  {
    // This links the complaint to the specific user who raised it
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', 
    },
    title: { 
      type: String, 
      required: [true, 'Please add a title'] 
    },
    description: { 
      type: String, 
      required: [true, 'Please add a description'] 
    },
    category: { 
      type: String, 
      required: true,
      enum: ['Road', 'Water', 'Electricity', 'Garbage', 'Streetlight', 'Other'] 
    },
    status: { 
      type: String, 
      enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'], 
      default: 'Pending' 
    },
    imageUrl: { 
      type: String // We will save the link to the uploaded photo here later
    },
    location: {
      latitude: { type: Number },
      longitude: { type: Number },
      address: { type: String }
    }
  }, 
  { 
    timestamps: true 
  }
);

// Create the Model
const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
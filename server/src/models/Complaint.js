const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    location: {
      lat: Number,
      lng: Number,
      address: String,
    },
    imageUrl: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Complaint', complaintSchema);

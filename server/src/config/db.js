const mongoose = require('mongoose');

async function connectDB() {
  if (!process.env.DB_URL) {
    throw new Error('DB_URL is not defined');
  }

  await mongoose.connect(process.env.DB_URL);
}

module.exports = connectDB;

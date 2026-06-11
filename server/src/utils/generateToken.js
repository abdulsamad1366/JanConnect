const jwt = require('jsonwebtoken');

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET || 'change_me', {
    expiresIn: '7d',
  });
}

module.exports = generateToken;

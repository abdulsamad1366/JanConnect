function protect(req, res, next) {
  next();
}

function adminOnly(req, res, next) {
  next();
}

module.exports = { protect, adminOnly };

const express = require('express');
const {
  createComplaint,
  getComplaints,
  updateComplaint,
} = require('../controllers/complaintController');

const router = express.Router();

router.route('/').get(getComplaints).post(createComplaint);
router.route('/:id').put(updateComplaint);

module.exports = router;

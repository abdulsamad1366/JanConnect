const express = require('express');
const { assignDepartment, updateStatus } = require('../controllers/adminController');

const router = express.Router();

router.put('/assign-department', assignDepartment);
router.put('/update-status', updateStatus);

module.exports = router;

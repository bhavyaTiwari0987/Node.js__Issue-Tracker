const express = require('express');
const issueController = require('./../controllers/issueController');
const router = express.Router();

router.post('/createIssue/:name' , issueController.createIssue);

module.exports = router;    
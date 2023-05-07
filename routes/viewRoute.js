const express = require('express');
const router = express.Router();
const viewController = require('./../controllers/viewController');

router.get('/home' , viewController.getHomePage);
router.get('/createProject' , viewController.getCreateProjectPage);
router.get('/projectDetail' , viewController.getProjectDetailPage);
router.get('/createIssue' , viewController.getCreateIssuePage);

module.exports = router;
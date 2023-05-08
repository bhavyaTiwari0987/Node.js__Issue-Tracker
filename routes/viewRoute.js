const express = require('express');
const router = express.Router();
const viewController = require('./../controllers/viewController');

router.get('/home' , viewController.getHomePage);
router.get('/createProject' , viewController.getCreateProjectPage);
router.get('/projectDetail/:name' , viewController.getProjectDetailPage);
router.get('/createIssue/:name' , viewController.getCreateIssuePage);

module.exports = router;
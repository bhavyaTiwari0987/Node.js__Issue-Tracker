const express = require("express");
const issueController = require("./../controllers/issueController");
const router = express.Router();

router.post("/createIssue/:name", issueController.createIssue);
router.get("/issueFilter/:name", issueController.filterProjectDetails);

module.exports = router;

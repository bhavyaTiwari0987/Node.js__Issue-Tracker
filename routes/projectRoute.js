const express = require("express");
const router = express.Router();
const projectController = require("./../controllers/projectController");

router.post("/createProject", projectController.createProject);
router.get("/getAllProjects", projectController.getAllProjects);

module.exports = router;

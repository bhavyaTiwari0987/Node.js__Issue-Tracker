const Project = require("./../models/projectModel");

// FOR CREATING NEW PROJECT
exports.createProject = async (req, res, next) => {
  try {
    console.log(req.body);
    const newProject = await Project.create(req.body);
    res.redirect('/home');
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: "fail",
    });
  }
};

// FOR GETTING ALL THE PROJECTS
exports.getAllProjects = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "All the Projects",
  });
};


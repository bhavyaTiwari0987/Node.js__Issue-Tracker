const Project = require("./../models/projectModel");

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
exports.getAllProjects = (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: "All the Projects",
  });
};

exports.demo= (req, res, next)=> {
  console.log('in demo');
  res.send('demo');
}
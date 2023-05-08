const Project = require('./../models/projectModel');

exports.getHomePage = async (req, res, next)=>{
    const projects = await Project.find();
    res.render('home' , {
        projects
    });
}
exports.getCreateProjectPage = (req, res, next)=>{
    res.render('createProject');
}
exports.getProjectDetailPage = async (req, res, next)=>{
    const project = await Project.findOne({name: req.params.name}).populate('issues');
    // console.log(project);
    
    res.render('projectDetail' , {
        project
    });
    
}
exports.getCreateIssuePage = async(req, res, next)=>{
    const project = await Project.findOne({name: req.params.name})
    res.render('createIssue' , {
        project
    });
}
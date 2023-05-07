exports.getHomePage = (req, res, next)=>{
    res.render('home');
}
exports.getCreateProjectPage = (req, res, next)=>{
    res.render('createProject');
}
exports.getProjectDetailPage = (req, res, next)=>{
    res.render('projectDetail');
}
exports.getCreateIssuePage = (req, res, next)=>{
    res.render('createIssue');
}
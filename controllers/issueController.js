const Issue = require("./../models/issueModel");
const Project = require("./../models/projectModel");

exports.createIssue = async (req, res, next) => {
  const id = req.params.name;
  const url = `/projectDetail/${id}`;
  const project = await Project.findOne({ name: req.params.name });
  
  // CREATING NEW ISSUE
  const { issue, description, labels, author } = req.body;

  const newIssue = new Issue({
    issue,
    description,
    labels: req.body.labels.split(",").map((s) => s.trim()),
    author,
  });
  // SAVING NEW ISSUE 
  const savedIssue = await newIssue.save();
  // ADDING OBJECT ID OF NEW ISSUE IN PARTICULAR PROJECT...
  await Project.updateOne({ _id: project._id }, { $push: { issues: savedIssue._id } });
  
  res.redirect(url);
};

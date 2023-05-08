const Issue = require("./../models/issueModel");
const Project = require("./../models/projectModel");

// FOR CREATING NEW ISSUE/BUG IN PROJECT
exports.createIssue = async (req, res, next) => {
  const id = req.params.name;
  const url = `/projectDetail/${id}`;
  const project = await Project.findOne({ name: req.params.name });

  // CREATING NEW ISSUE
  const newIssue = await Issue.create(req.body);

  // ADDING OBJECT ID OF NEW ISSUE IN PARTICULAR PROJECT...
  await Project.updateOne(
    { _id: project._id },
    { $push: { issues: newIssue._id } }
  );
  res.redirect(url);
};

// FOR FILTERING THE ISSUES BY DIFFERENT FILTERS
exports.filterProjectDetails = async (req, res, next) => {
  const title = req.query.title;
  const author = req.query.author;
  const labels = req.query.labels;
  let issuesByLabel;
  let issuesByTitle;
  let issuesByAuthor;
  let check = false;

  // FETCHING THE ISSUES BY LABEL
  if (labels) {
    issuesByLabel = await Issue.find({ labels: { $in: labels } });
  }
  // FETCHING THE ISSUES BY TITLE
  if (title) {
    issuesByTitle = await Issue.find({ issue: title });
  }
  // FETCHING THE ISSUES BY AUTHOR
  if (author) {
    issuesByAuthor = await Issue.find({ author: author });
  }

  const finalFilteredIssues = [];
  // INSERTING THE ISSUES BY LABEL FILTER IN FINAL ARRAY
  if (issuesByLabel) {
    for (let i = 0; i < issuesByLabel.length; i++) {
      for (let j = 0; j < finalFilteredIssues.length; j++) {
        if (
          JSON.stringify(issuesByLabel[i]._id) ===
          JSON.stringify(finalFilteredIssues[j]._id)
        ) {
          check = true;
        }
      }
      if (!check) {
        finalFilteredIssues.push(issuesByLabel[i]);
      }
    }
  }
  check = false;

  // INSERTING THE ISSUES BY TITLE FILTER IN FINAL ARRAY
  if (issuesByTitle) {
    for (let i = 0; i < issuesByTitle.length; i++) {
      for (let j = 0; j < finalFilteredIssues.length; j++) {
        if (
          JSON.stringify(issuesByTitle[i]._id) ===
          JSON.stringify(finalFilteredIssues[j]._id)
        ) {
          check = true;
        }
      }
      if (!check) {
        finalFilteredIssues.push(issuesByTitle[i]);
      }
    }
  }

  // INSERTING THE ISSUES BY AUTHOR FILTER IN FINAL ARRAY
  check = false;
  if (issuesByAuthor) {
    for (let i = 0; i < issuesByAuthor.length; i++) {
      for (let j = 0; j < finalFilteredIssues.length; j++) {
        if (
          JSON.stringify(issuesByAuthor[i]._id) ===
          JSON.stringify(finalFilteredIssues[j]._id)
        ) {
          check = true;
        }
      }
      if (!check) {
        finalFilteredIssues.push(issuesByAuthor[i]);
      }
    }
  }

  const name = req.params.name;
  const url = `/projectDetail/${name}`;
  const currentProject = await Project.findOne({ name: name });

  let project;

  project = {
    _id: currentProject._id,
    name: currentProject.name,
    description: currentProject.description,
    author: currentProject.author,
    issues: [],
  };
  for (let i = 0; i < finalFilteredIssues.length; i++) {
    project.issues.push(finalFilteredIssues[i]);
  }
  res.render("projectDetail", {
    project,
  });
};

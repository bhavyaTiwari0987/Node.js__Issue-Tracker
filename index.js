const express = require("express");
const path = require("path");
const viewRouter = require("./routes/viewRoute");
const projectRouter = require("./routes/projectRoute");
const issueRouter = require("./routes/issueRoute");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

// SETTING VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// SETTING STATIC FILE
app.use(express.static(`${__dirname}/public`));

// MIDDLEWARES
app.use(express.urlencoded());
app.use(express.json());

// SETTING MONGO DB (DATABASE)
const DB =
  "mongodb://bhavyatiwari917:WmJqviE4tDD2eSEW@ac-thrklad-shard-00-00.myqgn3n.mongodb.net:27017,ac-thrklad-shard-00-01.myqgn3n.mongodb.net:27017,ac-thrklad-shard-00-02.myqgn3n.mongodb.net:27017/Issue-Tracker?ssl=true&replicaSet=atlas-20gjiu-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful"));

//MOUNTING THE ROUTERS
app.use("/", viewRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/issue", issueRouter);

// RUNNING SERVER
const port = 8000;
app.listen(port, () => {
  console.log("Server is running on port:", port);
});

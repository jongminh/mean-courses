const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');

const app = express();

const connUrl = "mongodb+srv://jason:toErCOtlccxA6jTK@cluster0-yelie.mongodb.net/node-angular?retryWrites=true";
mongoose.connect(connUrl)
  .then( () => {
    console.log("Connected to database!");
  })
  .catch( (e) => {
    console.log(e);
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
   "origin, X-Requested-With, Content-Type, Accept");
   res.setHeader("Access-Control-Allow-methods",
   "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
})

app.use('/api/posts', postRoutes);

module.exports = app;

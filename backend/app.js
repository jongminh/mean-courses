const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const Post = require('./models/post');

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

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
   "origin, X-Requested-With, Content-Type, Accept");
   res.setHeader("Access-Control-Allow-methods",
   "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully!'
  })
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fasdas1231',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'asdasd2131',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    }
  ];
  return res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;

const express = require('express');
let app = express();
const parser = require('body-parser');
const axios = require('axios');

//********middleware and plugins*********
app.use(parser.json());
app.use(express.static(__dirname + '/../../dist'));

//*******GET/POST section*******

//profile search - example url: localhost:8080/search/?input=batman+begins
app.get('/search', (req, res) => {

  console.log(req.query);

  //search the API here for a movie response
  //then send back single movie response to front end axios call
  
  res.status(200).send('movie was searched');
});

//profile save with tags
app.post('/save', (req, res) => {
  //access the data that needs to be posted to db like this
  console.log(req.body);

  //save data to both the global movie table
  //AND the users individual history

  //placeholder for testing
  res.status(200).send(req.body);
});

//*******Global Querying by Mood*******

//mood search - example url: localhost:8080/results/?moods=happy+sad+cool
app.get('/results/:moods?', (req, res) => {
  //creating an array with each mood that was sent with query
  var moods = req.query.moods.split(' ');
  console.log(moods);

  res.status(200).send('received your query');
});

//*****Single User Functionality ******/

//get history for dynamic username parameter
//example url: localhost:8080/users/history/?username=parker
app.get('/users/history/:username?', (req, res) => {
  //this is how you grab the username from the url
  console.log(req.query.username);

  res.status(200).send(req.query);
});

//*******Authentication section*******



//*******server startup********
let port = process.env.PORT || 8080;
app.listen(port, () => console.log('listening in on port: ', port));
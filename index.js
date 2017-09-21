const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// creates ninjago if it does not exist
mongoose.connect('mongodb://localhost/ninjago');
//mongoose.Promise = global.Promise; // override because it's depricated

// middleware to parese json usw.
app.use(bodyParser.json());

// initialize routes
app.use('/api',require('./routes/api'));

// middleware for error handling
// our own made middleware
app.use(function(err, req, res, next){
  res.status(422).send(err.errors.name.message);
});

// listen for request a..
// process... to listen on port suplied by forex. heroku...
app.listen(process.env.port || 4000, function() {
  console.log('listening for requests');
});

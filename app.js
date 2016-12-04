var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/beers');

var Beer = require("./BeerModel");

var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.send("You are inside the fullstack project")
});

app.get('/beers', function (req, res) {
  Beer.find(function (error, beers) {
    res.send(beers);
  });
});

app.post('/beers', function (req, res) {
  var weinstephen = new Beer(req.body); 
  weinstephen.save();
  console.log(req.body);
  res.send(weinstephen);
});

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000);
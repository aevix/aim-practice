var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var {getName,data,enterData} = require('./assets/db');

//populate data from db
getName();
//data parser module
var urlencodedParser = bodyParser.urlencoded({ extended: false});

//ejs for view
app.set('view engine', 'ejs');

//assets for html
app.use('/assets', express.static('assets'));

//json using express
app.use(express.json());


//routing functions
app.get('/', function(req, res){
  res.render("profile", {topplayer: data});
});


app.post('/', urlencodedParser, function(req, res){
  enterData(req.body.name, req.body.score);
  res.json();
});


app.listen(3000);
console.log('You are listening to port 3000');
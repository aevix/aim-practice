var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var data = [{name: "yuhyun", score: 100}, {name: "eddie", score: 96}, {name: "april", score: 87}];

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', function(req, res){
  res.render("profile", {topplayer: data});
});

app.post('/', urlencodedParser, function(req, res){
  data.push(req.body);
  res.json(data);
});

app.listen(3000);
console.log('You are listening to port 3000');

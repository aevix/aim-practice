var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var {data,enterData,create, del} = require('./assets/db');
var start = require('./assets/canvas')
//create initialize datatable
create();

//data parser module
var urlencodedParser = bodyParser.urlencoded({ extended: false});

//ejs for view
app.set('view engine', 'ejs');

//assets for html
app.use('/assets', express.static('assets'));

//json using express
app.use(express.json());


//routing functions
app.get('/', async function(req, res){
  var database = await data();

  res.render("profile", {topplayer: database});
});


app.post('/', urlencodedParser, async function(req, res){
  // del();

    const database = await enterData(req.body.name, req.body.score);

    res.json();

});


app.listen(3000);
console.log('You are listening to port 3000');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/template.html');
});

app.listen(3000);

// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT||8000;


var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require(path.join(__dirname, './app/routing/apiRoutes'));
require(path.join(__dirname, './app/routing/htmlRoutes'));

apiRoutes(app); 
htmlRoutes(app);

app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});


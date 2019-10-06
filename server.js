// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT||8000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Add the application routes
require(path.join(__dirname, './app/rounting/apiRoutes'));
require(path.join(__dirname, './app/rounting/htmlRoutes'));

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});


// var express = require ('express');
// var app = express(); 
// var port = process.env.port||2000;
// app.use(express.json);
 
// var food =[
//    { id: 1, name: "bannana"},
//    { id: 2 ,name: "meat"}

// ]

// app.get('/food/:id', function(req,res){
 
//    var cons = food.find(c=> c.id=== parseInt(req.params.id));
  

//     if(!food) res.Status(404).send("not found");
//     res.send(cons)

// });


// app.get('/',function(req,res)
// {
//  res.send('port')


// })

// app.get('/1', function(req,res){

//     res.send([1,2,3])
// })
 

// app.listen(port , console.log(`test ${port}...`)); 
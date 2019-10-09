
console.log('HTML Route Connected Successfully');

var path = require('path');

 module.exports = function htmlRoutes(app) {
  
  // HTML : Basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
 

}


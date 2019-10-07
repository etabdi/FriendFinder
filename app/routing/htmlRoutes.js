
console.log('HTML Route Connected Successfully');

var path = require('path');

function htmlRoutes(app) {

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  });

}


// Export for use in main server.js file
module.exports = htmlRoutes;
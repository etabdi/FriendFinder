console.log('API Route Connected Successfully');

var friendsData = require('../data/friends.js');
function apiRoutes(app) {


  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  app.post('/api/friends', function (req, res) {

   
    var new_freind = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }
    new_freind.scores = scoresArray;

    var scores = [];
    for(var i=0; i < friendsData.length; i++){

      var currentComparison = 0;
      for(var j=0; j < new_freind.scores.length; j++){
        currentComparison += Math.abs( new_freind.scores[j] - friendsData[i].scores[j] );
      }
      scores.push(currentComparison);
    }
    var bestMatchPosition = 0;
       
    for(var i=1; i < scores.length; i++){  
      if(scores[i] <= scores[bestMatchPosition])
      {
        bestMatchPosition = i;
      }
    }
  
    var Best_match = friendsData[bestMatchPosition];
    res.json(Best_match);
    friendsData.push(new_freind);

  });

}

module.exports = apiRoutes;
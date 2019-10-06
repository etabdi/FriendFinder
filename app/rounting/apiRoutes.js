//apiRoutes.js
//first we will grab the prefilled out data from the friends.js file.
var friends = require('../data/friends.js');
//console.log(friends[0].name);
module.exports = function(app){


	//first we will set up the route to display the raw Json data.
	app.get("/api/friends", function(request, response){
	        response.json(friends);
	    });
	app.post("/api/friends", function(request, response){
		var newFriend = request.body;
		//console.log(friends[0].score[0]);

 //console.log(newFriend);
        
        for(var i = 0; i < newFriend.scores.length; i++){
            if(newFriend.scores[i] === "1 (Strongly Disagree)"){
                newFriend.scores[i] = 1;
            }else if(newFriend.scores[i] === "5 (Strongly Agree)"){
                newFriend.scores[i] = 5;
            }else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }
        
        var diff = [];
        
        for(var i = 0; i < friends.length; i++){
            var compatibleFriend = friends[i];
            var totalDifference = 0;
            
            for(var j = 0; j < compatibleFriend.scores.length; j++){
                var tempDiff = Math.abs(compatibleFriend.scores[j] - newFriend.scores[j]);
                totalDifference += tempDiff; 
            }
            diff.push(totalDifference);
        }
        
        var num = diff[0];
        var index = 0;
        
        for(var x = 0; x < diff.length; x++){
            if(diff[x] < num){
                num = diff[x];
                index = x;
            }
        }
        
        friends.push(newFriend);
        
        response.json(friends[index]);
        

		//first we will cycle through the clients array which is nested in our friends variable.
			// we will need two for loops, one to go through each member of the clients array, and then a second one to go through each answer to that client in that index slot.
			//for(i = 0; i < friends.length; i++){
			//	var cycleFriend = friends[i];
			//	console.log('hey now!' + cycleFriend);
				//console.log('friend here: ' + friends[i]);
				//for(j = 0; j < friends[i].score.length; j++){

				//}
			//}

		//send a response back to survey.html
			//will need the index of the chosen file.
		//response.json(friends);
		//push new user into json database:
		//friends.push(newFriend);
	});

}
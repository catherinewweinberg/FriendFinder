var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var possibleMatch = 0;
    var match = {
      name: "",
      photo: "",
      difference: 10000
    };

    var newFriend = req.body;
    var newName = newFriend.name;
    var newPhoto = newFriend.photo;
    var newScore = newFriend.surveyQuestions;

    // calculating the total is not complete

    for (var i = 0; i < friends.length; i++) {
      possibleMatch = +Math.abs(
        parseInt(newFriend.surveyQuestions[1] - friends[i].surveyQuestions[1])
      );
      if (possibleMatch <= match.difference) {
        match.name = friends[i].name;
        match.name = friends[i].photo;
        match.difference = possibleMatch;
      }
    }

    friends.push(newFriend);
    res.json(friends[match]);
  });
};

var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var match = {
      name: "",
      photo: "",
      difference: 1000
    };

    var newFriend = req.body;

    // calculating the total is not complete

    for (var i = 0; i < friends.length; i++) {
      var possibleMatch = +Math.abs(
        parseInt(newFriend.surveyQuestion[1] - friends[i].surveyQuestions[1])
      );
    }

    friends.push(newFriend);
    res.json(friends[match]);
  });
};

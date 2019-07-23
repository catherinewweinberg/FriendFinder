var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var newScore = 0;
    var total = 0;
    var match = {
      name: "",
      photo: "",
      difference: 1000
    };

    // calculating the total is not complete
    for (var i = 0; i < friends.length; i++) {
      total = 0;
    }

    friends.push(newFriend);
    res.json(match);
    console.log(match);
  });
};

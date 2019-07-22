var friends = require("../data/friends.js");
var path = require("path");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};

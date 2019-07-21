//npm packages
var express = require("express");

//tells node we are creating an express server
var app = express();

//sets an initial port
var PORT = process.env.PORT || 8080;

//sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

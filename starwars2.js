// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});
      // : lets express anything after it will be a parameter, and we can access it by .notation
app.get("/:characters", function(req, res) {
  //this vari able is a one big objects with objects nested within
  var chosen = req.params.characters;

  // What does this log?
  console.log(chosen);

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
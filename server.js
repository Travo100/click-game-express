const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./models");

const dbURL = process.env.MONGODB_URI || "mongodb://localhost/clickGameDb";

// connect to your prod mongodb or if that does not exist
// then connect to your local
mongoose.connect(dbURL);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/chihuahua", (req, res) => {
  db.Chihuahua
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

app.get("/api/chihuahua", (req, res) => {
  db.Chihuahua
    .find({})
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

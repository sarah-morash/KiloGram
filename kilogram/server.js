var path = require("path");
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
import Exercises from "./mongoose/exercises";
import Users from "./mongoose/users";

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb://localhost:27017/local",
  { useNewUrlParser: true }
);
var db = mongoose.connection;
db.on("error", () => {
  console.log("---FAILED to connect to mongoose");
});
db.once("open", () => {
  console.log("+++Connected to mongoose");
});

// start the server
app.listen(3000, () => {
  console.log("+++Express Server is Running!!!");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/exercises", (req, res) => {
  console.log(req);
  // Insert into Exercise Collection
  var exerciseItem = new Exercises({
    name: req.body.exercise
  });
  exerciseItem.save((err, result) => {
    if (err) {
      console.log("---ExerciseItem save failed " + err);
    }
    console.log("+++ExerciseItem saved successfully " + exerciseItem.item);
    res.redirect("/");
  });
});

app.post("/users", (req, res) => {
  // Insert into Users Collection
  var userItem = new Users({
    name: req.body.user.name,
    email: req.body.user.email,
    password: req.body.user.password,
    dateCreated: Date.now()
  });
  userItem.save((err, result) => {
    if (err) {
      console.log("---UserItem save failed " + err);
    }
    console.log("++++UserItem saved successfully " + userItem.item);
    res.redirect("/");
  });
});

app.get("/exercises", (req, res) => {
  mongoose.model("Exercises").find(function(err, exercises) {
    res.send(exercises);
  });
});

app.get("/users", (req, res) => {
  mongoose.model("Users").find(function(err, users) {
    res.send(users);
  });
});

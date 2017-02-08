const burger = require("../models/burger.js");
// const path = require("path");
// const app = express();

//required npm to get this app to work
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");

const app = express();

//using the url/ to post the home.html
exports.get = app.get("/", function(req, res) {
  burger("all", res);
});

exports.post = app.post("/", function(req, res) {
  // console.log(req); //trying to find out how to navicate through req
  burger("insert", res, "icecream");
});

//going to need a put request also so we can update the burger being devoured or not

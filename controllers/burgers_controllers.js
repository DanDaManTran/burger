const burger = require("../models/burger.js");

//required npm to get this app to work
const express = require("express");

const app = express();

//using the url/ to post the home.html
exports.get = app.get("/", function(req, res) {
  burger("all", res);
});

exports.post = app.post("/", function(req, res) {
  burger("insert", res, req.body.burger_name);
});

exports.put = app.put("/", function(req, res) {
  burger("update", res, req.body.id);
});

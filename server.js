//required npm to get this app to work
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

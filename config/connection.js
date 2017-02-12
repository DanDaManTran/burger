//requiring some important information
const mysql = require("mysql");
const kee = require("../key.js");

//creating the connection, connecting to the database, and exporting it
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: kee.mysql,
  database: "burgers_db"
});

if (process.env.JAWSDB_URL){
  connection = process.env.JAWSDB_URL;
};

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;

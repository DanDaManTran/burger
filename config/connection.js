//requiring some important information
const mysql = require("mysql");
// const kee = require("./key.js");

//creating the connection, connecting to the database, and exporting it
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "whatpassword",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;

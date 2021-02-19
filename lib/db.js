var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abbmcw1379!",
  database: "opentutorials",
});
db.connect();
module.exports = db;

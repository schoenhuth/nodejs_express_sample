var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "playground"
});

con.connect(function(err) {
  if (err) throw err;

  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  console.log("Connected!");
});
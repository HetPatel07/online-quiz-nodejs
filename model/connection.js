const mysql = require('mysql')

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

});
// var sql = "TRUNCATE TABLE users";

// conn.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
// });
module.exports = conn;
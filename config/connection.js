//Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

//making my connection to the burgers_db database
connection.connect(function(err){
    if (err) {
        console.error(`Connection error: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`);
});

//exporting connection for ORM
modules.exports = connection;
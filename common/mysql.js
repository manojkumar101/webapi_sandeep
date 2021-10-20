
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@ait49490",
  database:"building-link"
});

myFunction();

function myFunction() {
    setTimeout(function () {
        con.connect(function (err) {
            if (err) {
                console.log('Error connecting to Database');
                return;
            }

            console.log("Started iteration on - " + new Date());
            console.log("Connection established");
        });
    }, 3000);
}

module.exports = con;
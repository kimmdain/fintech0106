var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'q1w2e3r4',
  database : 'fintech',
  port     : '3306'
});
 
connection.connect();
 
connection.query('SELECT * FROM test', function (error, results, fields) {
  if (error) throw error;
  console.log('The result is: ', results);
});
 
connection.end();

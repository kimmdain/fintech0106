var express = require("express"),
app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'q1w2e3r4',
  database : 'fintech',
  port     : '3306'
});
 
connection.connect();

app.get('/', function(req, res){
    res.render('index');
})

app.get('/test', function(req, res){
    res.render('test');
})

app.get('/dbtofront', function(req, res){
    connection.query('SELECT * FROM test', function (error, results, fields) {
        if (error) throw error;
        console.log('The result is: ', results);
      });
      
})


app.listen(port);
console.log("Listening on port ", port);

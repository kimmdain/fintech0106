var express = require("express"),
app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', function(req, res){
    res.render('test');
})

app.listen(port);
console.log("Listening on port ", port);

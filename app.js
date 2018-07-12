//Database connection code
let mongo    = require("mongodb").MongoClient; 
var uri      = process.env.MONGOURI;

var express  = require('express');
var app      = express();
var path	 = require('path');

console.log(process.env.MONGOURI);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});


let item = {
    "username": "ryanGundu",
    "password": "testing123"
};

app.get('/addToDatabase', function(req, res) {
    mongo.connect(uri, function(err, client) {
        const db = client.db("hostit");
        db.collection("Users").insertOne(item, function (err, result) {
            if (!err) {
                console.log("Item inserted");
            } else {
                console.log(err);
            }
            client.close();
		});
	});
	
	res.send("Success");
});
    


//running server on port#
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Running app at localhost: "+ port);
});

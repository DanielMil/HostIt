//Database connection code
let mongo    = require("mongodb").MongoClient; 
var uri      = process.env.MONGOURI;

var express  = require('express');
var app      = express();
var path	 = require('path');

// var admin = require('firebase-admin');
// admin.initializeApp();

app.use('/static', express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// app.get('/logOut', function(req, res) {
//     res.send("Complete");
// });

app.get('/addToDatabase', function(req, res) {

    let userToInsert = {
        "username": req.query.username,
        "password": req.query.password,
        "firstName": req.query.firstName,
        "lastName": req.query.lastName,
        "email": req.query.lastName
    };

    mongo.connect(uri, function(err, client) {
        const db = client.db("hostit");
        db.collection("Users").insertOne(userToInsert, function (err, result) {
            if (!err) {
                console.log("User inserted to database");
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

//Database connection code
let mongo    = require("mongodb").MongoClient; 
var uri      = process.env.MONGOURI;

var express  = require('express');
var app      = express();
var path	 = require('path');

// var admin = require('firebase-admin');
// admin.initializeApp({
//     serviceAccount: __dirname + "./serviceAccountCredentials.json",
//     databaseURL: "https://host-it-d0976.firebaseio.com"
// });


app.use('/static', express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/addToDatabase', function(req, res) {

    let userValues = JSON.parse(req.query.JSONstring);

    let userToInsert = {
        "firstName": userValues.firstName,
        "lastName": userValues.lastName,
        "email": userValues.email
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

app.get('/login', (req, res) => {
    res.sendFile('public/login.html'); 
});

app.get('/signup', (req, res) => {
    res.sendFile('public/signup.html'); 
});
    
//running server on port#
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Running app at localhost: "+ port);
});

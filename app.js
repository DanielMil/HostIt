//Database connection code
let mongo    = require("mongodb").MongoClient; 
var uri      = "mongodb+srv://danielmil:<PASSWORD>@cluster0-986ej.mongodb.net/test?";

var express  = require('express');
var app      = express();
var path	 = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

//running server on port#
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Running app at localhost: "+ port);
});


let item = {
    "username": "daniel",
    "password": "hello123"
};

app.get('/addToDatabase', function(req, res) {
    mongo.connect(uri, function(err, client) {
	   
		if (err) {
			throw err;
		} else {
			console.log("Connected");
		}
		// const collection = client.db("hostit").collection("Users");
        // client.collection("Users").insertOne(item, function (err, result) {
        //     if (!err) {
        //         console.log("Item inserted");
        //     }
        //     client.close();
		// });
		
		client.close();
	});
	
	res.send("Success");
});
    
// document.addEventListener("DOMContentLoaded", event => {
//     const app = firebase.app();
// });

// //Let Google handle the authentication
// function loginWithGoogle() {    
//     provider = new firebase.auth.GoogleAuthProvider();  
//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user;
//             document.write("Hello " + user.displayName);
//             console.log(user);
//         })
//         .catch(console.log)
// }

// //Email password authentication starts here
// //Get elements
// const txtEmail = document.getElementById('txtEmail');
// const txtPassword = document.getElementById('txtPassword');
// const btnLogin = document.getElementById('btnLogin');
// const btnSignUp = document.getElementById('btnSignUp');
// const btnLogout = document.getElementById('btnLogout');

// //Add login event
// btnLogin.addEventListener('click', e => {
//     const email = txtEmail.value;
//     const pass = txtPassword.value;
//     const auth = firebase.auth();

//     const promise = auth.signInWithEmailAndPassword(email, pass);
//     promise.then(user => {
//         document.write("Hello " + user);
//         console.log(user);
//         btnLogout.classList.remove('invisible');
//     });
//     promise.catch(e => console.log(e.message)); 
// });

// //Add signup event
// btnSignUp.addEventListener('click', e => {
//     const email = txtEmail.value;
//     const pass = txtPassword.value;
//     const auth = firebase.auth();

//     const promise = auth.createUserWithEmailAndPassword(email, pass);
//     promise.then(e => {
//         document.getElementById('status').innerHTML = "Succesfully Signed Up.";
//     });
//     promise.catch(e => console.log(e.message)); 
// });

// //Add logout event
// btnLogout.addEventListener('click', e => {
//     firebase.auth().signOut();
//     document.write("Goodbye");
//     btnLogout.classList.add('invisible');
// });

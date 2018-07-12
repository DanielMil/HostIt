
var config = {
    apiKey: "AIzaSyDCpYfH4O8qPpf7F3yUIFwW41AbIZAyt_Y",
    authDomain: "host-it-d0976.firebaseapp.com",
    databaseURL: "https://host-it-d0976.firebaseio.com",
    projectId: "host-it-d0976",
    storageBucket: "",
    messagingSenderId: "293590162456"
};
firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {

    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth =  firebase.auth();

    //Sign-In
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        } else {
            console.log("Sign-In successful!");
        }
        // ...
    });

});

btnSignUp.addEventListener('click', e => {

    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth =  firebase.auth();

    //Sign-Up
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        } else {
            console.log("User Created Successfully!")
        }
        // ...
    });

});

btnLogout.addEventListener('click', e => {

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("Sign-out successful.");
        }).catch(function(error) {
        // An error happened.
        console.log("Unable to Sign-out: " + error);
    });

});

firebase.auth().onAuthStateChanged(firebase => {
    if (firebase) {
        console.log("user is logged-in");
        btnLogout.classList.remove('invisible');
    } else {
        console.log("Not logged In");
        btnLogout.classList.add('invisible');
    }
});


// btnInsertDatabase.addEventListener('click', e => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//         }
//     };
//     xhttp.open("GET", "addToDatabase", true);
//     xhttp.send();
// });
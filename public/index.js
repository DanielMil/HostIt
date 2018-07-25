var config = {

};

firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');

btnLogin.addEventListener('click', e => {

    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth =  firebase.auth();

    //Sign-In
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        if (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        } else {
            console.log("Sign-In successful!");
        }
    });

});

btnSignUp.addEventListener('click', e => {
    window.location = 'static/signup.html'; 
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("user is logged-in");
        if (!user.emailVerified) {
            console.log("Email unverified.");
            alert("Please verify email before logging in."); 
        } else {
            window.location = 'static/home.html';
        }
        // btnLogout.classList.remove('invisible');
        // verification.classList.remove('invisible');
        // verification.innerHTML = 'Verified: ' + user.emailVerified;
        
    } else {
        console.log("Not logged In");
        // btnLogout.classList.add('invisible');
        // verification.classList.add('invisible');
    }
});

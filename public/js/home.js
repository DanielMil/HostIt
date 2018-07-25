var config = {

};

firebase.initializeApp(config);

const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', e => {

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("Sign-out successful.");
        window.location = '/';
        }).catch(function(error) {
        // An error happened.
        console.log("Unable to Sign-out: " + error);
    });

});

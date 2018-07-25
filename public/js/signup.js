var config = {

};

firebase.initializeApp(config);

btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    const confirmPassword = txtConfirmPassword.value;
    const firstName =  txtFirstName.value;
    const lastName = txtLastName.value;

    if (password != confirmPassword) {
        alert("Passwords do not match!");
        return; 
    }


    let User = {
        'firsName': firstName,
        'lastName': lastName,
        'email': email
    }; 
    let JSONstring = JSON.stringify(User);
    
    //Sign-Up
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
        console.log("User created on Firebase");
        
        var member = firebase.auth().currentUser;
        member.sendEmailVerification().then(function() {
            console.log('Email sent to ' + user.email);
            alert(`Verification email sent to ${email}`); 
        }).catch(function(error) {
            console.log('Error: could not send email'); 
        });

        setTimeout(function() {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                window.location = '/'; 
            }
            };
            xhttp.open("GET", `../addToDatabase/?JSONstring=${JSONstring}`, true);
            xhttp.send();
        },1000);
    });
});    

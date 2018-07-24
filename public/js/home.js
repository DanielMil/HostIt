const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', e => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "logOut", true);
    xhttp.send();
});

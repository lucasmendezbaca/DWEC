// get cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// delete cookie
function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.write("<h1>Sesion cerrada con exito</h1>");
}

// check cookie
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        document.write(`<h1>Welcome again ${user}</h1>`);
        document.write("<br><a href='javascript:deleteCookie()'>Delete cookie</a>");
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 0.0007);
        }
        const h1 = document.getElementById("h1");

        h1.innerHTML = "Welcome again " + user;
        document.write("<br><a href='javascript:deleteCookie()'>Delete cookie</a>");
    }
}

// Ejecución
checkCookie();


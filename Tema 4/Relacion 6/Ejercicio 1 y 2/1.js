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
    const h1 = document.getElementById("h1");
    const cerrarSesion = document.getElementById("cerrar_sesion");
    if (user != "") {
        h1.innerHTML = "Welcome again " + user;
        cerrarSesion.innerHTML = "<a href='javascript:deleteCookie()'>Cerrar Sesion</a>";
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 0.0007);
        }
        h1.innerHTML = "Welcome again " + user;
        cerrarSesion.innerHTML = "<a href='javascript:deleteCookie()'>Cerrar Sesion</a>";
    }
}

// cambiar color de fondo de parrafo
function cambiarFondo(elemento, color){
    elemento.style.backgroundColor = color;
}

const parrafo = document.getElementById("parrafo");
const cambiarColor = document.getElementById("cambiar_color");
const color = document.getElementById("color");
const disminuir = document.getElementById("disminuir");
const aumentar = document.getElementById("aumentar");

cambiarColor.addEventListener("click", function(){
    cambiarFondo(parrafo, color.value);
    setCookie("colorFondoParrafo", parrafo.style.backgroundColor);
});

function disminuirFuente(elemento){
    let size = parseInt(window.getComputedStyle(elemento).fontSize);
    elemento.style.fontSize = (size - 1) + "px";
}

function aumentarFuente(elemento){
    let size = parseInt(window.getComputedStyle(elemento).fontSize);
    elemento.style.fontSize = (size + 1) + "px";
}

aumentar.addEventListener("click", function(){
    aumentarFuente(parrafo);
});

disminuir.addEventListener("click", function(){
    disminuirFuente(parrafo);
});

// Ejecución
checkCookie();

if(getCookie("colorFondoParrafo")){
    cambiarFondo(parrafo, getCookie("colorFondoParrafo"));
}


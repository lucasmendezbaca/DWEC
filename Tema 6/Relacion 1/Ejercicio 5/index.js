const correos = document.getElementById("correos");

window.addEventListener("load", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "correos.xml", true);
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            let docXML = xhr.responseXML;
            let correosXML = docXML.getElementsByTagName("correo");
            for(let i = 0; i < correosXML.length; i++){
                let correo = document.createElement("div");
                correo.className = "correo";
                let emisor = document.createElement("div");
                emisor.className = "emisor";
                emisor.textContent = correosXML[i].getElementsByTagName("emisor")[0].textContent;
                let asunto = document.createElement("div");
                asunto.className = "asunto";
                asunto.textContent = correosXML[i].getElementsByTagName("asunto")[0].textContent;
                let fecha = document.createElement("div");
                fecha.className = "fecha";
                fecha.textContent = correosXML[i].getElementsByTagName("fecha")[0].textContent;
                correo.appendChild(emisor);
                correo.appendChild(asunto);
                correo.appendChild(fecha);
                correos.appendChild(correo);
            }

        } else{
            correos.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
        }
    });
    xhr.send();
});

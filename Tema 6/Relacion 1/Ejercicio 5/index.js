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

                correo.innerHTML = `
                    <div class="correo__cabecera">
                        <div class="correo__cabecera__asunto">${correosXML[i].getElementsByTagName("asunto")[0].textContent}</div>
                        <div class="correo__cabecera__fecha">${correosXML[i].getElementsByTagName("fecha")[0].textContent}</div>
                    </div>
                    <div class="correo__cuerpo">
                        <div class="correo__cuerpo__remitente">${correosXML[i].getElementsByTagName("emisor")[0].textContent}</div>
                        <div class="correo__cuerpo__mensaje">${correosXML[i].getElementsByTagName("mensaje")[0].textContent}</div>
                    </div>
                `;
                correos.appendChild(correo);
            }

        } else{
            correos.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
        }
    });
    xhr.send();
});

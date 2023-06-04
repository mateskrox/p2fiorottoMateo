function miFuncion(){


    fetch("models.json")
        .then(response => response.json())
        .then(data => {
            var id = document.getElementById("numerouno").value;
            var id = data.paises[id-1].id;
            var pai = data.paises[id-1].nombre;
            var cap = data.paises[id-1].capital;
           
            let html = `ID: ${id} <br>
            Nombre: ${pai} <br>
            Estado: ${cap} <br>
            `
            document.getElementById("mensaje").innerHTML = html
            
            if (pai=="ARG") {
                document.getElementById("mensaje").style.backgroundColor = "cyan";
            }  else if (data.paises[id-1].nombre=="BRA") {
                document.getElementById("mensaje").style.backgroundColor = "yellow";
            }
    })
}
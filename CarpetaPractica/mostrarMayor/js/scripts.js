function miFuncion(){
    var i = 0;
    var x = 0;
    var x2 = 0;
    var id = document.getElementById("numerouno").value;
    var id2 = document.getElementById("numerodos").value;
    fetch("https://rickandmortyapi.com/api/character/"+id)
    .then(response => response.json())

    .then(data => {
        var nombre = data.name;
        var estado = data.status;
        var especie = data.species;
        var tipo = data.type;
        var sexo = data.gender;
        var origen = data.origin.name;
        var ubicacion= data.location.name;
        var imagen= data.image;
        var episodios= data.episode;

        let html = `ID: ${id} <br>
        Nombre: ${nombre} <br>
        Estado: ${estado} <br>
        Especie: ${especie} <br>
        Tipo: ${tipo} <br>
        Sexo: ${sexo} <br>
        Origen: ${origen} <br>
        Ubicacion: ${ubicacion} <br>
        Imagen: <img src= "${imagen}">
        `
        
        document.getElementById("pj1").innerHTML = html;

        x = data.episode.length;

        document.getElementById("cantEP").innerHTML = "Cantidad de episodios en los que aparece: " + x;
    }) 

    fetch("https://rickandmortyapi.com/api/character/"+id2)
    .then(response => response.json())

    .then(data => {
        var nombre2 = data.name;
        var estado2 = data.status;
        var especie2 = data.species;
        var tipo2 = data.type;
        var sexo2 = data.gender;
        var origen2 = data.origin.name;
        var ubicacion2= data.location.name;
        var imagen2= data.image;
        var episodios2= data.episode;

        let html2 = `ID: ${id2} <br>
        Nombre: ${nombre2} <br>
        Estado: ${estado2} <br>
        Especie: ${especie2} <br>
        Tipo: ${tipo2} <br>
        Sexo: ${sexo2} <br>
        Origen: ${origen2} <br>
        Ubicacion: ${ubicacion2} <br>
        Imagen: <img src= "${imagen2}">
        `
        
        document.getElementById("pj2").innerHTML = html2;
        
        x2 = episodios2.length;

        document.getElementById("cantEP2").innerHTML = "Cantidad de episodios en los que aparece: " + x2;
        
        if (x > x2) {
            document.getElementById("msjfin1").innerHTML = "Este personaje aparece en mas episodios"; 
        } else {
        document.getElementById("msjfin2").innerHTML = "Este personaje aparece en mas episodios";
        }
    }) 
    
}

//MOSTRAR UNO ALADO DE OTRO, REQUIRED DESDE JS
function miFuncion(){
    fetch("https://randomuser.me/api")  
    .then(response => response.json()) 
    
    .then(data => {
        var nombre = data.results[0].name.first;
        var apellido = data.results[0].name.last;
        var dni = data.results[0].id.value;
        var imagen = data.results[0].picture.large;
        var latitud = data.results[0].location.coordinates.latitude;
        var longitud = data.results[0].location.coordinates.longitude;
        let html = `
        Nombre: ${nombre} <br>
        Apellido: ${apellido} <br>
        Nombre: ${dni} <br>
        Latitud:${latitud} <br>
        Longitud:${longitud} <br>
        Imagen: <img src= "${imagen}">
        `
        
        if (data.results[0].gender == "female") {
            document.body.style.backgroundColor = "green";
        } else {
            document.body.style.backgroundColor = "yellow";
        } 
        document.getElementById("mensaje").innerHTML = html

        var container = L.DomUtil.get('map');
        if(container != null){
        container._leaflet_id = null;
        }

        var map = L.map('map').setView([data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude]).addTo(map);
        var circle = L.circle([data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);

        marker.bindPopup("Aqui vive esta persona.").openPopup();
    }) 

    var idpj=document.getElementById("idpersonaje").value;
    fetch("https://rickandmortyapi.com/api/character/"+idpj)  
    .then(response => response.json()) 
    
    .then(data => {
        var id2 = data.id;
        var nombre2 = data.name;
        var estado2 = data.status;
        var especie2 = data.species;
        var tipo2 = data.type;
        var sexo2 = data.gender;
        var origen2 = data.origin.name;
        var ubicacion2= data.location.name;
        var imagen2= data.image;
        let html2 = `ID: ${id} <br>
        Nombre: ${nombre2} <br>
        Estado: ${estado2} <br>
        Especie: ${especie2} <br>
        Tipo: ${tipo2} <br>
        Sexo: ${sexo2} <br>
        Origen: ${origen2} <br>
        Ubicacion: ${ubicacion2} <br>
        Imagen: <img src= "${imagen2}">
        `

        document.getElementById("mensaje2").innerHTML = html2
    })
}
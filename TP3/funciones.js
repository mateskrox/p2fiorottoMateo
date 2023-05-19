function miFuncion(){
  fetch("https://randomuser.me/api") //Fetch a la api Random User
  .then(response => response.json()) 
  
  .then(data => {
    //Defino y concateno vars
      var nombre = data.results[0].name.first;
      var apellido = data.results[0].name.last;
      var dni = data.results[0].id.value;
      var imagen = data.results[0].picture.large;
      var latitud = data.results[0].location.coordinates.latitude;
      var longitud = data.results[0].location.coordinates.longitude;
      var genero = data.results[0].gender;
      let html = `
      Nombre: ${nombre} <br>
      Apellido: ${apellido} <br>
      Nombre: ${dni} <br>
      Latitud:${latitud} <br>
      Longitud:${longitud} <br>
      Imagen:<br> <img src= "${imagen}">
      `
      //Si el genero es mujer que el fondo sea Verde y sino amarillo
      if (genero == "female") {
          document.getElementById("mensaje").style.backgroundColor = "green";
      } else {
        document.getElementById("mensaje").style.backgroundColor = "yellow";
      } 

      document.getElementById("mensaje").innerHTML = html

      //MAPA//
      //Primero, chequeo si el mapa esta vacio o no
      var container = L.DomUtil.get('map');
      if(container != null){
      container._leaflet_id = null;
      }

      //Establece la vista del mapa en el codigo y pone la imagen en la pagina
      var map = L.map('map').setView([latitud, longitud], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      //Añade marcador, circulo y un PopUp que dice "aqui vive esta persona"
      var marker = L.marker([latitud, longitud]).addTo(map);
      var circle = L.circle([latitud, longitud], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 500
      }).addTo(map);

      marker.bindPopup("Aqui vive esta persona.").openPopup();

    //Fetch a la api de RickAndMorty, ya realizado en tp2. Solo cambio el data1
    var idpj=document.getElementById("idpersonaje").value;
    fetch("https://rickandmortyapi.com/api/character/"+idpj)  
    .then(response => response.json()) 
  
    .then(data1 => {
      var id2 = data1.id;
      var nombre2 = data1.name;
      var estado2 = data1.status;
      var especie2 = data1.species;
      var tipo2 = data1.type;
      var sexo2 = data1.gender.toLowerCase();
      var origen2 = data1.origin.name;
      var ubicacion2= data1.location.name;
      var imagen2= data1.image;

      let html2 = `<br>ID: ${id2} <br>
      Nombre: ${nombre2} <br>
      Estado: ${estado2} <br>
      Especie: ${especie2} <br>
      Tipo: ${tipo2} <br>
      Sexo: ${sexo2} <br>
      Origen: ${origen2} <br>
      Ubicacion: ${ubicacion2} <br>
      Imagen:<br> <img src= "${imagen2}">
      `
      document.getElementById("mensaje2").innerHTML = html2

      //Defino el mensaje match. Si El genero de la persona de random user y rickandmorty es igual, entonces
      //que muestre el mensaje "match"
      //el match.style.display = block/none es por si el genero cambia
      var mensajematch= "match";

      if (sexo2 == "female") {
        document.getElementById("mensaje2").style.backgroundColor = "green";
    } else {
      document.getElementById("mensaje2").style.backgroundColor = "yellow";
    } 

      if (sexo2 == genero) {
        document.getElementById("match").innerHTML = mensajematch;
        match.style.display = "block";
      } else {
        match.style.display = "none"; 
      }
      
    }) 
    })
}


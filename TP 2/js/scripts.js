function miFuncion(){
    var id = document.getElementById("numerouno").value; //Obtengo el numero introducido en el input
    fetch("https://rickandmortyapi.com/api/character/"+id)  //Realizo el fetch a la pagina + el numero
    //introducido para poder indicar el personaje
    .then(response => response.json()) //indico que me muestre el resultado en .json
    
    //DEFINO QUE DATOS NECESITO EN DISTINTAS VARIABLES
    .then(data => {
        var nombre = data.name;
        var estado = data.status;
        var especie = data.species;
        var tipo = data.type;
        var sexo = data.gender;
        var origen = data.origin.name;
        var ubicacion= data.location.name;
        var imagen= data.image;

        //DEFINO UNA VARIABLE HTML CONCATENANDO LOS ELEMENTOS ANTERIORES
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
        //las etiquetas br son para saltar linea
        
        document.getElementById("mensaje").innerHTML = html //INDICO QUE MUESTRE TODO EN EL P DEL HTML
    }) 
}

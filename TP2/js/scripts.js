function miFuncion(){
    var i = 0;
    var x = 0;
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
        var episodios= data.episode;

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

        x = data.episode.length

        /*
        for(i of data.episode){  //Recorremos el I con el api segun la cantidad de episodios que encuentre
            i++;
            x++;
            //Sumamos variables. La variable X es para mostrar el RDO ya que la I vuelve a 0 al salir
            //del for.
        }
        */
        document.getElementById("cantEP").innerHTML = "Cantidad de episodios en los que aparece: " + x;
    }) 
}

function miFuncion(){
    //DEFINO VARS
    let x = 0;
    let x2 = 0;
    var id = document.getElementById("numerouno").value;
    var id2 = document.getElementById("numerodos").value;
    var personajes = [id,id2]; //DEFINO ARRAY CON LAS ID DE CADA PJ

    if (id=='' || id2=='') { //Si el campo de ID de los personajes esta vacio que de una alerta 
        // (y no ejecute el fetch)
        alert("Coloca valores en los dos campos.");
    } else {   
        for (let i = 0; i<2; i++) { //leo el array por posicion (llega hasta 2)
            fetch("https://rickandmortyapi.com/api/character/"+personajes[i]) //hago el fetch segun el array
            .then(response => response.json())
            .then(data => { 
                //defino variables segun la api.
                var nombre = data.name;
                var ident = data.id;
                var estado = data.status;
                var especie = data.species;
                var tipo = data.type;
                var sexo = data.gender;
                var origen = data.origin.name;
                var ubicacion= data.location.name;
                var imagen= data.image;
                var episodios= data.episode; 

                //Los concateno al HTML
                let html = `ID: ${ident} <br>
                Nombre: ${nombre} <br>
                Estado: ${estado} <br>
                Especie: ${especie} <br>
                Tipo: ${tipo} <br>
                Sexo: ${sexo} <br>
                Origen: ${origen} <br>
                Ubicacion: ${ubicacion} <br>
                Imagen: <br> <img src= "${imagen}"><br>
                `
    
                //Si la posiciond el array es 0 (primer elemento) entonces que muestre todo en el personaje 1
                //Si no, que lo haga para el  2.
                /*NOTA: Lo hago asi por que es para 2 personajes, si fueran mas tendriamos que hacerlo
                        Con arrays, porque sino tendriamos que escribir nuevas lineas de codigo para
                        cada personaje a plasmar en el html y no es la idea. */
                if (i==0){
                    document.getElementById("pj1").innerHTML = html;
                    x = episodios.length;
                    document.getElementById("cantEP").innerHTML = "Cantidad de episodios en los que aparece: " + x;
                } else {
                    document.getElementById("pj2").innerHTML = html;
                    x2 = episodios.length;
                    document.getElementById("cantEP2").innerHTML = "Cantidad de episodios en los que aparece: " + x2; 
                };

                //Por ultimo, si la posicion del array esta en el segundo elemento y X es mayor o menos a X2
                //Que escriba quien aparece mas en pantalla.
                if (i==1 && x>x2) { 
                    document.getElementById("msjfin1").innerHTML = "Este personaje aparece en mas episodios"
                    console.log(x);
                    console.log(x2);
                } else if (i==1 && x2>x) {
                    document.getElementById("msjfin2").innerHTML = "Este personaje aparece en mas episodios"
                    console.log(x2);
                    console.log(x);                    
                };  
            })
        }
    }
}

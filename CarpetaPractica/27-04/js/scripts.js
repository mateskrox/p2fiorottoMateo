function miFuncion(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(function(response){
            return response.json()
            })
            .then(function(data){
                console.log(data);
            })
        }
        
        
        /*
        const miObjeto= {
        nombre: 'Barrios',
        edad: 24,
        activo: true,
        apodo: 'Perrito',
        saludar: function(){return "hola"}
        }
        */
    
    /* onsole.log(miObjeto.apodo);
    console.log(miObjeto.saludar); */
    // console.log(miObjeto["apodo"]) ES igual al de arriba



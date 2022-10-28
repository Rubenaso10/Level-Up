let imagenes = [] 
const llamandoAPI = async () => {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0') // llamada a la PokeApi usando fetch
  
      const {results} = await respuesta.json() // se utiliza un destructuring para capturar los resultados
  
      const pokemones = results.map(async (pokemon) => { 
        const {name, url} = pokemon
        const respuestaPokemon = await fetch(url)
        const { sprites } = await respuestaPokemon.json() 

        
        console.log(name, sprites.front_default)
       


        const src = sprites.front_default;// se capturan las url de las imagenes
        let imgTag = document.createElement('img'); // se crea un elemento img 
        imgTag.src = src; // se convierte las url en imagenes
        
        imagenes.push(src) // guarda las url en la lista de imagenes creada al principio
        
        
       
        
        document.body.appendChild(imgTag); // se implementan las imagenes en el documento
            //console.log(results[i].url.sprites.back_shiny_female.front_default)
        
        
       
         
        
        
       

       
      })
  
    } catch (error) {
      console.log(error);
    } 
  }
  
  llamandoAPI()

  
  console.log(imagenes)
 
let imagenes = []
const llamandoAPI = async () => {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
  
      const {results} = await respuesta.json()
  
      const pokemones = results.map(async (pokemon) => {
        const {name, url} = pokemon
        const respuestaPokemon = await fetch(url)
        const { sprites } = await respuestaPokemon.json()

        
        console.log(name, sprites.front_default)
       


        const src = sprites.front_default;
        let imgTag = document.createElement('img');
        imgTag.src = src;
        
        imagenes.push(src)
        
        
       
        
        document.body.appendChild(imgTag);
            //console.log(results[i].url.sprites.back_shiny_female.front_default)
        
        
       
         
        
        
       

       
      })
  
    } catch (error) {
      console.log(error);
    } 
  }
  
  llamandoAPI()

  
  console.log(imagenes)
 
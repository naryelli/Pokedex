import { useState, useEffect } from "react"
    


export default function Pokedex(){
    const [id, setId] = useState(1)
    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => { //funcao assincrona para encontrar dados e conectar na API
      try{
        const response = await fetch(`link API: https://pokeapi.co/api/v2/pokemon/${id}`)
        //crase = template string, utilizando para string que vão mudar de valor no decorrer da renderização
      const data = await response.json()
      setPokemon(data); 
    }catch(error){
        console.error(error);
    }

    useEffect(() =>{
        fetchData()
    }, [id])

}

const nextPokemon = () => {
    setId(id + 1)
}

    return(
    <div>
       {pokemon && (
         <div>
           <h1>Pokémon</h1>
           <p>{pokemon.name}</p>
           <p>{pokemon.type}</p>
           <p>Peso: {pokemon. weight}g</p>
           <img src ={pokemon.sprites.front_default} alt= "pokemon"></img>
           <button onClick={nextPokemon}>Proximo</button>
         </div>
    )}
    </div>
    )
    
}
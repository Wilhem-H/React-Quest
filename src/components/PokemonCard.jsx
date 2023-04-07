

  function PokemonCard({pokemon, pikachu}) {
    
        return <figure> 
                {pikachu()}
                {pokemon.imgSrc? <img src= {pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
                <figcaption>{pokemon.name}</figcaption> 
            </figure>
    
}


export default PokemonCard
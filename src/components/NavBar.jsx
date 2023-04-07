

  function NavBar({onSelect, pokemonList}) {
    
        return <>
        {pokemonList.map((pokemon, index) =>(
        <button key={index} onClick={() => onSelect(index)}>{pokemon.name}</button>
        ))}
        
        </>
    
}


export default NavBar
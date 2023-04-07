

  function NavBar(props) {
    
        return <>
        {props.pokemonList.map((pokemon, index) =>(
        <button key={index} onClick={() => props.onSelect(index)}>{pokemon.name}</button>
        ))}
        
        </>
    
}


export default NavBar
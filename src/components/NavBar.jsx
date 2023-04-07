

  function NavBar({name, index, setPokemonIndex}) {
    
    const changePokemon = (index1) => { setPokemonIndex(index1)}
        return <>
        <button onClick={changePokemon(index)}>{name}</button>
        </>
    
}


export default NavBar
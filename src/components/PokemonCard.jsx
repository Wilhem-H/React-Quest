// function PokemonCard() {
//     return <figure> 
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"alt="Bulbisare"/>
//         <figcaption>bulbasaur</figcaption> 

//     </figure>
// }





  function PokemonCard(props) {
    console.log(props)
    
        return <figure> 
                {props.imgSrc? <img src= {props.imgSrc} alt={props.name}/> : <p>???</p>}
                <figcaption>{props.name}</figcaption> 
            </figure>
    
}


export default PokemonCard
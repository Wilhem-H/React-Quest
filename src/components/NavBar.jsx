import PropTypes  from "prop-types"

// NavBar.propTypes = {
//  next : PropTypes.function.isRequired,
//  previous: PropTypes.function.isRequired,
// }.isRequired


  function NavBar({next, previous}) {
    
        return <>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
        </>
    
}


export default NavBar
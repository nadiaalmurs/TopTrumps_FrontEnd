import { Link } from "react-router-dom";


const HomeContainer = () => {
  
    return(
        <>
        <Link to="/instructions">How to Play!</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/play">Play</Link>
        </>
    )
}

export default HomeContainer;
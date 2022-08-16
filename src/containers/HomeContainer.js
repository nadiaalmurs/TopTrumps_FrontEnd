import { Link } from "react-router-dom";
import styled from "styled-components";
import '../App.css';


const HomeContainer = () => {

    const BoxContainer = styled.div`
    max-width: 1200px;
    max-height: 700px;
    background-color: #ebe8e1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

    const Header = styled.h1`
    text-align: center;
    font-family: 'DIN Next LT Pro Bold', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-size: 60px;
    `

    const Links = styled.div`
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    `

    return(
        <BoxContainer>
            <Header>Valorant Top Trumps</Header>
            <Links>
        <button>
            <div>
                <span></span>
        <a href="/instructions">How to Play!</a>
            </div>
        </button>
        <button>
            <div>
                <span></span>
        <a href="/cards">Cards</a>
            </div>
        </button>
        <button>
            <div>
                <span></span>
        <a href="/play">Play</a>
            </div>
        </button>
        </Links>
        </BoxContainer>
    )
}

export default HomeContainer;
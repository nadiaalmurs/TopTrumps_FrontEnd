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

    const TextLink = styled.div`
    text-align: center;
    padding: 10px;

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        li {
            padding: 10px;
        }
    }

    a {
        background-color: #fe4655;
        color: #ebe8e1;
        text-decoration: none;
        padding: 5px;
        border-radius: 5px;
    }

    a:hover {
        background-color: black;
        color: #ebe8e1;
        padding: 5px;
        border-radius: 5px;
    }
    `

    const Header = styled.h1`
    text-align: center;
    `

    return(
        <BoxContainer>
            <Header>Valorant Top Trumps</Header>
            <TextLink>
                <ul>
                    <li>
        <Link to="/instructions">How to Play!</Link>
                    </li>
                    <li>
        <Link to="/cards">Cards</Link>
                    </li>
                    <li>
        <Link to="/play">Play</Link>
                    </li>
                </ul>
            </TextLink>
        </BoxContainer>
    )
}

export default HomeContainer;
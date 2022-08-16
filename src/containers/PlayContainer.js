import { useEffect, useState } from "react";
import styled from "styled-components";
import Game from "../components/Game";

const PlayContainer = ({cards}) => {
    
    const [playerCards, setPlayerCards] = useState([]);
    const [computerCards, setComputerCards] = useState([]);

    useEffect(() => {
        const tempPlayerCards = [];
        const tempComputerCards =[];
        cards.map((card, index) => {
            if (index === 0 || index % 2 === 0) {
                tempPlayerCards.push(card)
            } else {
                tempComputerCards.push(card)
            }
        });
        setPlayerCards([...tempPlayerCards])
        setComputerCards([...tempComputerCards])
    }, [cards])


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

    return (
        <BoxContainer>
        <Game cards={cards} playerCards={playerCards} computerCards={computerCards} />
        </BoxContainer>
    )
}

export default PlayContainer;
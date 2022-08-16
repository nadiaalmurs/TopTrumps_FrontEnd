import { useEffect, useState } from "react";
import App from "../App";
import PlayContainer from "../containers/PlayContainer";
import ComputerCard from "./ComputerCard";
import PlayerCard from "./PlayerCard";
import styled from "styled-components";

const Game = ({cards, shuffleCards, setPlayerCards, playerCards, setComputerCards, computerCards}) => {

    const [result, setResult] = useState(null);

    shuffleCards(cards)

    function shuffleCards(cardArray) {
        if (cardArray !== 0) {
            let currentIndex = 18;
            let temporaryValue;
            let randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex = currentIndex - 1;

                temporaryValue = { ...cardArray[currentIndex] };
                cardArray[currentIndex] = cardArray[randomIndex];
                cardArray[randomIndex] = temporaryValue;
            }
            return cardArray;
        } else {
            return
        }
    };

    const handleAttackClick = (event) => {
        event.preventDefault();
        compareSkill("attack")
    }

    const handleControlClick = (event) => {
        event.preventDefault();
        compareSkill("control")
    }

    const handleDefenceClick = (event) => {
        event.preventDefault();
        compareSkill("defence")
    }

    const handleFragsClick = (event) => {
        event.preventDefault();
        compareSkill("frags")
    }

    const handleLurkClick = (event) => {
        event.preventDefault();
        compareSkill("lurk")
    }

    function compareSkill (skill){
        if (playerCards[0][skill] > computerCards[0][skill]) {
            setResult('You Win!')
        } else if (playerCards[0][skill] < computerCards[0][skill]) {
            setResult('You Lose!')
        } else if (playerCards[0][skill] === computerCards[0][skill]) {
            setResult('Draw!')
        } else {
            return null
        }
    }

    const playerItems = playerCards.map((card, index) => {

        return <PlayerCard card={card} key={index} handleAttackClick={handleAttackClick} handleControlClick={handleControlClick} handleDefenceClick={handleDefenceClick} handleFragsClick={handleFragsClick} handleLurkClick={handleLurkClick}/>
    })

    const computerItems = computerCards.map((card, index) => {
        return <ComputerCard card={card} key={index}/>
    })

    const GridContainer = styled.div`
        display: grid;
        grid-template-rows: 30% 70%
        grid-template-columns: 50% 50%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `

    const GridPlayerCard = styled.div`
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 1;
    `
    const GridResults = styled.div`
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
    `

    const GridComputerCard = styled.div`
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
    `

    return (
        <GridContainer>
            <GridPlayerCard>
        <b>{playerItems[0]}</b>
            </GridPlayerCard>
            <GridResults>
        <b> {result}</b>
            </GridResults>
            <GridComputerCard>
        <b>{computerItems[0]}</b>
        </GridComputerCard>
        </GridContainer>
    )
}

export default Game;
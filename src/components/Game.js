import { useEffect, useState } from "react";
import App from "../App";
import PlayContainer from "../containers/PlayContainer";
import ComputerCard from "./ComputerCard";
import PlayerCard from "./PlayerCard";

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
        if (playerItems[skill] > computerItems[skill]) {
            setResult('Player Wins')
        } else if (playerItems[skill] < computerItems[skill]) {
            setResult('Computer Wins')
        } else if (playerItems[skill] == computerItems[skill]) {
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

    return (
        <>
        <b>Result: {result}</b>
        <b>{playerItems[0]}</b>
        <b>{computerItems[0]}</b>
        </>
    )
}

export default Game;
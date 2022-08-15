import { useEffect, useState } from "react";
import App from "../App";
import PlayContainer from "../containers/PlayContainer";
import ComputerCard from "./ComputerCard";
import PlayerCard from "./PlayerCard";

const Game = ({cards, shuffleCards, setPlayerCards, playerCards, setComputerCards, computerCards}) => {

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

    const handleClick = (event) => {
        console.log(event)
    }

    const playerItems = playerCards.map((card, index) => {
        return <PlayerCard card={card} key={index} handleClick={handleClick}/>
    })

    const computerItems = computerCards.map((card, index) => {
        return <ComputerCard card={card} key={index} handleClick={handleClick}/>
    })

    return (
        <>
        <b>{playerItems[0]}</b>
        <b>{computerItems[0]}</b>
        </>
    )
}

export default Game;
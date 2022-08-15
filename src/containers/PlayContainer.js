import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Game from "../components/Game";

const PlayContainer = () => {
    
    const [cards, setCards] = useState([]);
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

    function shuffleCards(cardArray) {
        if (cardArray.length !== 0) {
            let currentIndex = cardArray.length;
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

    return (
        <Game/>
    )
}

export default PlayContainer;
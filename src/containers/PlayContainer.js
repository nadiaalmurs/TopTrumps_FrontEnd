import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
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

    return (
        <Game cards={cards} playerCards={playerCards} computerCards={computerCards} />
    )
}

export default PlayContainer;
import styled from "styled-components";

const PlayerCard = ({card, handleAttackClick, handleControlClick, handleDefenceClick, handleFragsClick, handleLurkClick}) => {

    const Card = styled.div`
    width: 250px;
    height: 450px;
    background-color: #ebe8e1;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fe4655;
    line-height: 2;
    padding: 5px;
    `

    return (
    <Card>
    <h4>{card.name}</h4>
    <img src={card.picture} alt="characterpicture" width="200px"></img>
    <b onClick={handleAttackClick}>Attack: {card.attack}</b>
    <b onClick={handleControlClick}>Control: {card.control}</b>
    <b onClick={handleDefenceClick}>Defence: {card.defence}</b>
    <b onClick={handleFragsClick}>Frags: {card.frags}</b>
    <b onClick={handleLurkClick}>Lurk: {card.lurk}</b>
    </Card>
    )
}

export default PlayerCard;
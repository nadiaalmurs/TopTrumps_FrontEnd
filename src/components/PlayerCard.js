import styled from "styled-components";
import '../App.css';

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
    font-family: 'DIN Next LT Pro Bold', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
    `

    return (
    <Card>
    <h4>{card.name}</h4>
    <img src={card.picture} alt="characterpicture" width="200px"></img>
    <b onClick={handleAttackClick} className="skills-button" >Attack: {card.attack}</b>
    <b onClick={handleControlClick} className="skills-button" >Control: {card.control}</b>
    <b onClick={handleDefenceClick} className="skills-button">Defence: {card.defence}</b>
    <b onClick={handleFragsClick} className="skills-button" >Frags: {card.frags}</b>
    <b onClick={handleLurkClick} className="skills-button" >Lurk: {card.lurk}</b>
    </Card>
    )
}

export default PlayerCard;

const PlayerCard = ({card, handleAttackClick, handleControlClick, handleDefenceClick, handleFragsClick, handleLurkClick}) => {

    console.log(card.id);

    return (
    <div className='PlayerCard'>
    <h4>{card.name}</h4>
    <img src={card.picture} alt="characterpicture" width="200px"></img>
    <h5 onClick={handleAttackClick}>Attack: {card.attack}</h5>
    <h5 onClick={handleControlClick}>Control: {card.control}</h5>
    <h5 onClick={handleDefenceClick}>Defence: {card.defence}</h5>
    <h5 onClick={handleFragsClick}>Frags: {card.frags}</h5>
    <h5 onClick={handleLurkClick}>Lurk: {card.lurk}</h5>
    </div>
    )
}

export default PlayerCard;
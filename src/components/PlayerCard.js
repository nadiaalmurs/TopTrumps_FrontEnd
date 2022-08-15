
const PlayerCard = ({card, handleClick}) => {

    
    return (
    <div className='PlayerCard'>
    <h4>{card.name}</h4>
    <img src={card.picture} alt="characterpicture"></img>
    <h5 onClick={handleClick}>Attack: {card.attack}</h5>
    <h5 onClick={handleClick}>Control: {card.control}</h5>
    <h5 onClick={handleClick}>Defence: {card.defence}</h5>
    <h5 onClick={handleClick}>Frags: {card.frags}</h5>
    <h5 onClick={handleClick}>Lurk: {card.lurk}</h5>
    </div>
    )
}

export default PlayerCard;
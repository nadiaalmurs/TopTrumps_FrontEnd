
const ComputerCard = ({card}) => {
  
    return(
    <div className='ComputerCard'>
    <h4>{card.name}</h4>
    <img src={card.picture} alt="characterpicture"></img>
    <h5>Attack: {card.attack}</h5>
    <h5>Control: {card.control}</h5>
    <h5>Defence: {card.defence}</h5>
    <h5>Frags: {card.frags}</h5>
    <h5>Lurk: {card.lurk}</h5>
    </div>
    )
}

export default ComputerCard;
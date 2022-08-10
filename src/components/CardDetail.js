import React from 'react';
import App from '../App';


const CardDetail = ({card}) => {

return (
    <div className='Card'>
    <h4>{card.name}</h4>
    <img src="{card.picture}" alt="characterpicture"></img>
    <h5>{card.attack}</h5>
    <h5>{card.control}</h5>
    <h5>{card.defence}</h5>
    <h5>{card.frags}</h5>
    <h5>{card.lurk}</h5>
    </div>
    )
}

export default CardDetail;
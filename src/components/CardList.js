import React from 'react';
import CardDetail from './CardDetail';


const CardList = ({cards}) => {

    const cardItems = cards.map((card, index) => {
      return <CardDetail card={card} key={index}/>
    })

  return (
    <div>
    <ul>
      {cardItems}
    </ul>
  </div>
  )
}

export default CardList;
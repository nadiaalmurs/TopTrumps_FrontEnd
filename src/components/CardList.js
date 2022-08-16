import React from 'react';
import CardDetail from './CardDetail';
import styled from 'styled-components';


const CardList = ({cards}) => {

    const cardItems = cards.map((card, index) => {
      return <CardDetail card={card} key={index}/>
    })

    const CardListContainer = styled.div`
    display: flex;
    flex-direction: row;
    `

  return (
    <CardListContainer>
    <ul>
      {cardItems}
    </ul>
  </CardListContainer>
  )
}

export default CardList;
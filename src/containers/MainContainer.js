import React, {Fragment, useEffect, useState} from 'react';
// import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import { Router, Route, Routes, useParams } from 'react-router-dom';
import CardsContainer from './CardsContainer';

const MainContainer = () => {

    const [cards, setCards] = useState([]);

    useEffect(()=> {
    getCards()
    }, [])

    const getCards = () => {
    fetch("http://localhost:8080/api/cards")
    .then(res => res.json())
    .then(output => setCards(output))
    }

    const findCardById = (id) => {
    return cards.find((card) => {
    return card.id === parseInt(id);
        })
    }

    return (
        // <CardsContainer cards={cards}/>
        <Router>
      <Routes>
      <Route path="/" element={<CardsContainer cards={cards}/>}/>
      <Route path="/cards" element={<CardsContainer cards={cards}/>}/>
      </Routes>
        </Router> 
    )
}

export default MainContainer;
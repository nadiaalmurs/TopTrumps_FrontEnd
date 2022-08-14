import React, {Fragment, useEffect, useState} from 'react';
// import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import { Router, Route, Routes, useParams } from 'react-router-dom';
import CardsContainer from './CardsContainer';
import HomeContainer from './HomeContainer';
import InstructionsContainer from './InstructionsContainer';
import PlayContainer from './PlayContainer';

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
        <Router>
      <Routes>
      <Route path="/" element={<HomeContainer/>}/>
      <Route path="/cards" element={<CardsContainer cards={cards}/>}/>
      <Route path="/play" element={<PlayContainer/>} />
      <Route path="/instructions" element={<InstructionsContainer/>} />
      </Routes>
        </Router> 
    )
}

export default MainContainer;
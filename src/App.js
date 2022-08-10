import React, {Fragment, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import CardsContainer from './containers/CardsContainer';
// import CardDetail from './components/CardDetail.js';

const App = () => {

    const [cards, setCards] = useState([]);

    useEffect(()=> {
    getCards()
    }, [])

    const getCards = () => {
    fetch("http://localhost:8080/api/cards")
    .then(res => res.json())
    .then(cards => setCards(cards))
    }

    const findCardById = (id) => {
    return cards.find((card) => {
    return card.id === parseInt(id);
        })
    }

    // const CardDetailWrapper = () => {
    // const {id} = useParams();
    // let foundCard = findCardById(id)
    // return <CardDetail card={foundCard}/>;
    // };


    return (
      <Router>
      <Routes>
      <Route path="/cards" element={<CardsContainer cards={cards}/>}/>
      </Routes>
        </Router>
    )
}

export default App;
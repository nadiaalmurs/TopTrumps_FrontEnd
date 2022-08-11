import React, {Fragment, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import CardsContainer from './containers/CardsContainer';
import MainContainer from './containers/MainContainer';
import CardDetail from './components/CardDetail.js';

const App = () => {

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

    const CardDetailWrapper = () => {
    const {id} = useParams();
    let foundCard = findCardById(id)
    return <CardDetail card={foundCard}/>;
    };


    return (
        <>
        {/* <CardsContainer cards={cards}/> */}
      
        <Router>
      <Routes>
      <Route path="/" element={<CardsContainer cards={cards}/>}/>
       <Route path="/cards" element={<CardsContainer cards={cards}/>}/>
       </Routes>
         </Router> 

        </>
    )
}

export default App;
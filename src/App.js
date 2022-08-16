import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CardsContainer from './containers/CardsContainer';
import HomeContainer from './containers/HomeContainer';
import InstructionsContainer from './containers/InstructionsContainer';
import PlayContainer from './containers/PlayContainer';
import './App.css'

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

    return (
        <div className='App'>
        <Router>
        <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/cards" element={<CardsContainer cards={cards}/>}/>
        <Route path="/play" element={<PlayContainer cards={cards}/>} />
        <Route path="/instructions" element={<InstructionsContainer/>} />
        </Routes>
        </Router> 
        </div>
        )
}

export default App;
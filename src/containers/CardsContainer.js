import CardList from "../components/CardList"
import App from "../App";
import styled from "styled-components";


const CardsContainer= ({cards}) => {

    const BoxContainer = styled.div`
    max-width: 1200px;
    max-height: 700px;
    background-color: #ebe8e1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

    const Header = styled.h1`
    text-align: center;
    `

return (
    <BoxContainer>
        <Header>Cards</Header>
    <CardList cards={cards}/>
    </BoxContainer>
)
}

export default CardsContainer;
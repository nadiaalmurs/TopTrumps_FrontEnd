import CardList from "../components/CardList"
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
    display: grid;
    grid-template-rows: 20% 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

    const Header = styled.h1`
    text-align: center;
    font-family: 'DIN Next LT Pro Bold', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-size: 60px;
    `

    const HeaderContainer = styled.div`
    grid-row-start: 1;
    grid-row-end: 1;
    `

    const CardsGrid = styled.div`
        grid-row-start: 2;
        grid-row-end: 2;
    `

return (
    <BoxContainer>
        <HeaderContainer>
        <Header>Cards</Header>
        </HeaderContainer>
        <CardsGrid>
    <CardList cards={cards}/>
        </CardsGrid>
    </BoxContainer>
)
}

export default CardsContainer;
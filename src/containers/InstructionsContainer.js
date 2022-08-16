import styled from "styled-components";

const InstructionsContainer = () => {

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

    const Paragraph = styled.p`
    text-align: center;
    `

    return(
        <BoxContainer>
        <Header>
        How to Play!
        </Header>
        <Paragraph>
            Click on the skill you would like to play.
            The card with the highest value wins! 
            Good Luck!
        </Paragraph>

        </BoxContainer>
    )
}

export default InstructionsContainer;
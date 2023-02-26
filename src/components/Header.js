import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 6em;
    border: solid black 1.2em;
    background-color: black;
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
    column-gap: 5%;
    align-items: center;
    margin-bottom: 1em;

    @media only screen and (max-width: 900px) {
        height: 5em;
        border: solid black 1em;
    }

    @media only screen and (max-width: 600px) {
        height: 3em;
        border: solid black 0.8em;
    }
`
const Rectangle = styled.div`
    flex-grow: 1;
    height: 100%;
    background-color: #f7ea71;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-family: 'Tilt Warp', cursive;
    font-size: 4.5em;
    margin: 0;

    @media only screen and (max-width: 900px) {
        font-size: 3em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 2em;
    }

    @media only screen and (max-width: 530px) {
        font-size: 1.5em;
    }
`
const Circle = styled.div`
    aspect-ratio: 1 / 1;
    height: 100%;
    border-radius: 50%;
    background-color: #f7ea71;
    position: relative;
    margin: 0em 0.8em 0em 0em;
`

const Header = () => {

    return(
        <Container>
            <Rectangle>
                <Title data-testid="Title" id="title">Testing Tunes</Title>
            </Rectangle>
            <Circle />
        </Container>
    )

}

export default Header
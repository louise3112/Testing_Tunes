import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 3em;
    border: solid black 0.6em;
    background-color: black;
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
    column-gap: 3%;
    align-items: center;
    margin-top: 1em;

    @media only screen and (max-width: 900px) {
        height: 2em;
        border: solid black 0.5em;
    }

    @media only screen and (max-width: 600px) {
        height: 1.5em;
        border: solid black 0.4em;
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
const FooterText = styled.p`
    font-family: 'Tilt Warp', cursive;
    font-size: 1em;
    font-weight: lighter;
    text-align: center;
    margin:0;

    @media only screen and (max-width: 900px) {
        font-size: 0.9em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 0.8em;
    }
`
const Circle = styled.div`
    aspect-ratio: 1 / 1;
    height: 100%;
    border-radius: 50%;
    background-color: #f7ea71;
    position: relative;
    margin: 0em 0em 0em 0.25em;
`

const Footer = () => {

    return(
        <Container>
            <Circle />
            <Rectangle>
                <FooterText data-testid="Footer" id="footer">Data taken from iTunes API</FooterText>
            </Rectangle>
        </Container>
    )

}

export default Footer
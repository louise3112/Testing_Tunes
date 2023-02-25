import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 3em;
    border: solid black 15px;
    background-color: black;
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
    column-gap: 1em;
    align-items: center;
    margin-top: 1em;
`
const TextBox = styled.div`
    width: 83em;
    height: 90%;
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
`
const Circle = styled.div`
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
    background-color: #f7ea71;
    position: relative;
    margin: 0em 0em 0em 0.25em;
`

const Footer = () => {

    return(
        <Container>
            <Circle />
            <TextBox>
                <FooterText data-testid="Footer" id="footer">Data taken from iTunes API</FooterText>
            </TextBox>
        </Container>
    )

}

export default Footer
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 6em;
    border: solid black 15px;
    background-color: black;
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
    column-gap: 1em;
    align-items: center;
    margin-bottom: 1em;
`
const Title = styled.h1`
    font-family: 'Tilt Warp', cursive;
    font-size: 4.5em;
    text-align: center;
    width: 17.5em;
    background-color: #f7ea71;
    position: relative;
`
const Circle = styled.div`
    height: 5.5em;
    width: 5.5em;
    border-radius: 50%;
    background-color: #f7ea71;
    position: relative;
    margin: 0em 0.8em 0em 0em;
`

const Header = () => {

    return(
        <Container>
            <Title data-testid="Title" id="title">Testing Tunes</Title>
            <Circle />
        </Container>
    )

}

export default Header
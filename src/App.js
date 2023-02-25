import React from "react"
import Top20Box from "./containers/Top20Box"

import styled from "styled-components"

const Title = styled.h1`
    font-family: 'Tilt Warp', cursive;
    font-size: 4.5em;
    text-align: center;
    margin: 0.25em 0em 0.15em 0em;
`
const Footer = styled.footer`
    font-family: 'Tilt Warp', cursive;
    font-size: 1em;
    font-weight: lighter;
    text-align: center;
    margin: 0.5em 0em 0.5em 0em;
`

function App() {
    return (
        <>
            <Title data-testid="Title" id="title">Testing Tunes</Title>
            <Top20Box />
            <Footer data-testid="Footer" id="footer">Data taken from iTunes API</Footer>
        </>

    );
}

export default App;

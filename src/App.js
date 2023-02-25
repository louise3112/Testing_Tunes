import React from "react"
import Header from "./components/Header"
import Top20Box from "./containers/Top20Box"
import Footer from "./components/Footer"

import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

function App() {

    return (
        <Container>
            <Header />
            <Top20Box />
            <Footer />
        </Container>
    );
}

export default App;

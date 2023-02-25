import React from "react"
import { useState, useEffect } from "react"
import Top20List from "../components/Top20List"

import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Top20Box = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    }, [])

    const getSongs = (url) => {
        fetch(url)
            .then(res => res.json())
                .then(data => setSongs(data.feed.entry))
                .catch(err => console.error(err))
    }

    return(
        <Container>
            {songs[0] && <Top20List songs={songs}/>}
        </Container>
    )
}

export default Top20Box


// const genres = [
//     {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
//     {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
//     {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
//     {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
//   ]

// const handleSelectChange = event => {
//   loadSongs(event.target.value);
// }

// return (
//   <>
//     <TitleBar
//       handleSelectChange={handleSelectChange}
//       genres={genres}
//     />
//     <Chart
//       songs={songs}
//       url={genres[0].url}
//       handleSelectChange={handleSelectChange}
//     />
//   </>
// );
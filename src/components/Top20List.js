import React from "react"
import Song from "./Song"

import styled from "styled-components"

const SongList = styled.ul`
    padding: 0;
    width: 80%;
    background-color: #e49f45;
    border: solid black 10px;
    border-bottom: none;
`

const Top20List = ({songs}) => {

    const songComponentArray = songs.map((song, index) => {
        return <Song song={song} position={index + 1} key={song.id["attributes"]["im:id"]} />
    })

    return (
        <SongList data-testid="song-list">
            {songComponentArray}
        </SongList>
    )

}

export default Top20List
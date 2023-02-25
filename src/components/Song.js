import React from "react"
import styled from "styled-components"

const Container = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: black solid 10px;
`
const PositionBox = styled.div`
    border-right: solid black 10px;
    width: 6em;
    height: 6.2em;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Position = styled.h2`
    font-family: 'Tilt Warp', cursive;
    font-size: 3em;
    margin: 0;
`
const SongDetails = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`
const Title = styled.p`
    margin: 0em 0em 0.3em 1em;
    font-family: 'Tilt Neon', cursive;
    font-size: 1.5em;
    font-weight: bold;
`
const Artist = styled.p`
    margin: 0em 0em 0em 1.2em;
    font-family: 'Tilt Neon', cursive;
    font-size: 1.25em;
    color: rgb(70, 70, 70);
`
const Image = styled.img`
    width: auto;
    height: 5em;
    margin: 0.5em 0.5em 0.5em 0.5em;
    border: solid rgb(120, 120, 120);
`

const Song = ({song, position}) => {

    return(
        <>
            <Container data-testid="song-item">
                <PositionBox>
                    <Position data-testid="song-position" className="song-position">{position}</Position>
                </PositionBox>
                <SongDetails>
                    <Title data-testid="song-title" className="song-title">{song["im:name"]["label"]}</Title>
                    <Artist data-testid="song-artist" className="song-artist">{song["im:artist"]["label"]}</Artist>
                </SongDetails>
                <Image data-testid="song-image" className="song-image" src={song["im:image"][0]["label"]} alt={"Single cover for " + song["im:name"]["label"] + " by " + song["im:artist"]["label"]}/>
            </Container>
        </>
    )
}

export default Song

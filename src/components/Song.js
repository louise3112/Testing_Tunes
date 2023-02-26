import React from "react"
// import { useState, useRef, useEffect } from "react"
import playButton from "../images/playButton.png"

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
const Image = styled.div`
    width: 5em;
    height: 5em;
    margin: 0.5em 0.5em 0.5em 0.5em;
    border: solid rgb(120, 120, 120);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
`
const SingleImg = styled.img`
    display: block;
    width: 100%;
`
const PlayButton = styled.img`
    position: absolute;
    width: 100%;
    opacity: 0.7;
    &:hover {opacity: 1;}
`

const Song = ({song, position, controlAudio, isPlaying, audioLink}) => {

    const altText = `${song["im:name"]["label"]} by ${song["im:artist"]["label"]}`

    const handleClick = () => {
        let playStatus = true
        if (isPlaying && audioLink === song["link"][1]["attributes"]["href"]) {
            playStatus = false
        } 
        controlAudio(song["link"][1]["attributes"]["href"], playStatus)
    }

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
                <Image onClick={handleClick} className="play-song">
                    <SingleImg data-testid="song-image" className="song-image" src={song["im:image"][0]["label"]} alt={"Play " + altText}/>
                    <PlayButton src={playButton} />
                </Image>
            </Container>
        </>
    )
}

export default Song


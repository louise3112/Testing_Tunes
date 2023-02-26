import React from "react"
import playButton from "../images/playButton.png"
import pauseButton from "../images/pauseButton.png"
// <a target="_blank" href="https://icons8.com/icon/87015/play-button-circled">Play Button Circled</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

import styled from "styled-components"

const Container = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: black solid 10px;
    height: 6em;

    @media only screen and (max-width: 900px) {
        border-bottom: solid black 8px;
        height: 5em;
    }

    @media only screen and (max-width: 600px) {
        border-bottom: solid black 6px;
        height: 4em;
    }
`
const PositionBox = styled.div`
    flex: 0 0 auto;
    border-right: solid black 10px;
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 900px) {
        border-right: solid black 8px;
    }

    @media only screen and (max-width: 600px) {
        border-right: solid black 6px;
    }
`
const Position = styled.h2`
    font-family: 'Tilt Warp', cursive;
    font-size: 3em;
    margin: 0;

    @media only screen and (max-width: 900px) {
        font-size: 2em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.5em;
    }
`
const SongDetails = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`
const Title = styled.p`
    margin: 0em 0em 0.3em 1em;
    font-family: 'Tilt Neon', cursive;
    font-size: 1.5em;
    font-weight: bold;

    @media only screen and (max-width: 900px) {
        font-size: 1.2em;
    }

    @media only screen and (max-width: 700px) {
        font-size: 1em;
    }

    @media only screen and (max-width: 530px) {
        font-size: 0.8em;
    }
`
const Artist = styled.p`
    margin: 0em 0em 0em 1.2em;
    font-family: 'Tilt Neon', cursive;
    font-size: 1.25em;
    color: rgb(70, 70, 70);

    @media only screen and (max-width: 900px) {
        font-size: 1.1em;
    }

    @media only screen and (max-width: 700px) {
        font-size: 0.9em;
    }

    @media only screen and (max-width: 530px) {
        font-size: 0.6em;
    }
`
const Image = styled.div`
    aspect-ratio: 1 / 1;
    height: 80%;
    margin: 0em 0.5em 0em 0.5em;
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
const PlayPauseButton = styled.img`
    position: absolute;
    width: 80%;
    opacity: 0.7;
    &:hover {opacity: 1;}
`

const Song = ({song, position, controlAudio, isPlaying, audioLink}) => {

    const altText = `${song["im:name"]["label"]} by ${song["im:artist"]["label"]}`
    const songCurrentlyPlaying = (isPlaying && audioLink === song["link"][1]["attributes"]["href"])

    const handleClick = () => {
        let playStatus = true
        if (songCurrentlyPlaying) {
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
                <Image data-testid="audio-button" onClick={handleClick} className="play-song">
                    <SingleImg data-testid="song-image" className="song-image" src={song["im:image"][0]["label"]} alt={"Play " + altText}/>
                    <PlayPauseButton data-testid="play-pause" className="play-pause" src={songCurrentlyPlaying ? pauseButton : playButton} alt={songCurrentlyPlaying ? "pause button" : "play button"}/>
                </Image>
            </Container>
        </>
    )
}

export default Song


import React from "react"
import { useState, useRef, useEffect } from "react"
import Song from "./Song"

import styled from "styled-components"

const SongList = styled.ul`
    padding: 0;
    width: 75%;
    background-color: #e49f45;
    border: solid black 10px;
    border-bottom: none;

    @media only screen and (max-width: 900px) {
        border: solid black 8px;
        border-bottom: none;
        width: 85%;
    }

    @media only screen and (max-width: 700px) {
        border: solid black 6px;
        border-bottom: none;
        width: 90%;
    }
`

const Top20List = ({songs, isPlaying, updatePlayingStatus}) => {

    const [audioLink, setAudioLink] = useState("")
    const audioSrc = useRef(null)

    useEffect(() => {
        if (isPlaying === null) {
            return
        }

        isPlaying ? audioSrc.current.play() : audioSrc.current.pause()
    }, [isPlaying, audioLink])

    const controlAudio = (songURL, playStatus) => {
        setAudioLink(songURL)
        updatePlayingStatus(playStatus)
    }

    const songComponentArray = songs.map((song, index) => {
        return <Song song={song} position={index + 1} controlAudio={controlAudio} isPlaying={isPlaying} audioLink={audioLink} key={song.id["attributes"]["im:id"]} />
    })

    return (
        <SongList data-testid="song-list">
            <audio data-testid="song-audio" ref={audioSrc} src={audioLink} alt={"Playing: " + isPlaying}/>
            {songComponentArray}
        </SongList>
    )

}

export default Top20List
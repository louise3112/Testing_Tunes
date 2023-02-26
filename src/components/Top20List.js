import React from "react"
import { useState, useRef, useEffect } from "react"
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

    const [isPlaying, setIsPlaying] = useState(null)
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
        setIsPlaying(playStatus)
    }

    const songComponentArray = songs.map((song, index) => {
        return <Song song={song} position={index + 1} controlAudio={controlAudio} isPlaying={isPlaying} audioLink={audioLink} key={song.id["attributes"]["im:id"]} />
    })

    return (
        <SongList data-testid="song-list">
            <audio data-testid="song-audio" className="song-audio" ref={audioSrc} src={audioLink} />
            {songComponentArray}
        </SongList>
    )

}

export default Top20List
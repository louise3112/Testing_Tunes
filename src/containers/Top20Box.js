import React from "react"
import { useState, useEffect } from "react"
import GenreDropdown from "../components/GenreDropdown"
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
    const [genreList, setGenreList] = useState({})
    const [genreType, setGenreType] = useState(null)
    const [isPlaying, setIsPlaying] = useState(null)
    
    useEffect(() => {
        getData(genreType)
        setIsPlaying(false)
    }, [genreType])

    const getData = (genreType) => {
        if (genreType === null) {
            fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
                .then(res => res.json())
                    .then(data => {
                        setSongs(data.feed.entry)
                        getGenres(data.feed.entry)
                    })
                    .catch(err => console.error(err))
        } else {
            fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=${genreType}/json`)
                .then(res => res.json())
                    .then(data => setSongs(data.feed.entry))
                    .catch(err => console.error(err))
        }
    }

    const getGenres = (songList) => {
        const allGenres = {}
        songList.forEach(song => {
            const key = song["category"]["attributes"]["im:id"]
            if (!allGenres[key]) {
                allGenres[key] = song["category"]["attributes"]["label"]
            }
        })
        setGenreList(allGenres)
    }

    const updateGenre = (genreID) => {
        setGenreType(genreID)
    }

    const updatePlayingStatus = (status) => {
        setIsPlaying(status)
    }

    return(
        <Container>
            {genreList !== {} && <GenreDropdown genres={genreList} updateGenre={updateGenre}/>}
            {songs[0] && <Top20List songs={songs} isPlaying={isPlaying} updatePlayingStatus={updatePlayingStatus}/>}
        </Container>
    )
}

export default Top20Box

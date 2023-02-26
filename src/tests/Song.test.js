import React from "react"
import Song from "../components/Song"
// import { render, fireEvent, waitFor } from "@testing-library/react"
import { render } from "@testing-library/react"

describe("Song", () => {

    let component

    beforeEach(() => {
        const testSongList = [{
            "im:name": {"label": "Flowers"},
            "im:image": [{"label": "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/170x170bb.png","attributes": {"height": "170"}}],
            "im:collection": {"im:name": {"label": "Endless Summer Vacation"}},
            "link": [{}, {"attributes": {"href": "https://music.apple.com/gb/album/flowers/1663973555?i=1663973562&uo=2"}}],
            "id": {"attributes": {"im:id": "1663973562"}},
            "im:artist": {"label": "Miley Cyrus"},
            "category": {"attributes": {"im:id": "14","label": "Pop"}},
            "im:releaseDate": {"attributes": {"label": "12 January 2023"}}
        }]
        const testIndex = 0;
        component = render(<Song song={testSongList[testIndex]} position={testIndex + 1}/>)
    })

    it('should display the song position based on the index', () => {
        const songPosition = component.getByTestId("song-position")
        expect(songPosition.textContent).toEqual("1")
    })

    it('should display the song title', () => {
        const songTitle = component.getByTestId("song-title")
        expect(songTitle.textContent).toEqual("Flowers")
    })

    it('should display the song artist', () => {
        const songArtist = component.getByTestId("song-artist")
        expect(songArtist.textContent).toEqual("Miley Cyrus")
    })

    it('song image must have src and alt attributes', () => {
        const songImage = component.getByTestId("song-image")
        expect(songImage).toHaveProperty("src", "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/170x170bb.png")
        expect(songImage).toHaveProperty("alt", "Play Flowers by Miley Cyrus");
    })

    it('song audio must have src attribute', () => {
        const songAudio = component.getByTestId("song-audio")
        expect(songAudio).toHaveProperty("src", "https://music.apple.com/gb/album/flowers/1663973555?i=1663973562&uo=2");
    })

})

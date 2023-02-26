import React from "react"
import Top20List from "../components/Top20List"
import { render } from "@testing-library/react"

describe("Top20List", () => {

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
        component = render(<Top20List songs={testSongList} />)
    })

    it('song audio must have src attribute', () => {
        const songAudio = component.getByTestId("song-audio")
        expect(songAudio).toHaveProperty("src");
    })

})
import React from "react"
import styled from "styled-components"

const Form = styled.form`
    margin: 0.5em 0em 0.5em 0em;
`
const Label = styled.label`
    font-family: 'Tilt Neon', cursive;
    font-size: 2.2em;
    padding: 0.2em 0.5em 0.2em 0.5em;
`
const Dropdown = styled.select`
    font-family: 'Tilt Neon', cursive;
    font-size: 2em;
    border: solid black 5px;
    padding: 0.2em 0em 0.2em 0.5em;
    width: 10em;
`
const OptionText = styled.option`
    font-family: 'Tilt Neon', cursive;
    font-size: 2em;
    padding: 0.2em 0em 0.2em 0.5em;
`

const GenreDropdown = ({genres, updateGenre}) => {

    const genreOptions = Object.keys(genres).map((key, index) => {
        return <OptionText data-testid="dropdown-option" value={key} key={key}>{Object.values(genres)[index]}</OptionText>
    })

    const handleChange = (evt) => {
        updateGenre(evt.target.value)
    }

    return(
        <Form>
            <Label data-testid="dropdown-label" id="dropdown" name="genres">Genre:</Label>
            <Dropdown data-testid="dropdown" id="genres" onChange={handleChange} >
                <OptionText data-testid="dropdown-option" value={null} key={null}>All</OptionText>
                {genreOptions}
            </Dropdown>
        </Form>
    )
}

export default GenreDropdown


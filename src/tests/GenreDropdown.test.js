import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import GenreDropdown from '../components/GenreDropdown';

describe('App', () => {

    let dropdown;

    beforeEach(() => {
        const testGenres = {
            14: "Pop",
            17: "Dance"
        }
        
        const updateGenre = (genreID) => {
            console.log(genreID)
        }

        dropdown = render(<GenreDropdown genres={testGenres} updateGenre={updateGenre}/>)
    })

    it('has a dropdown label', () => {
        const dropdownLabel = dropdown.getByTestId("dropdown-label")
        expect(dropdownLabel.textContent).toEqual("Genre:")
    })

    it('has a dropdown menu that contains given values', () => {
        const options = dropdown.getAllByTestId("dropdown-option")
        expect(options[0].textContent).toEqual("All")
        expect(options[1].textContent).toEqual("Pop")
        expect(options[2].textContent).toEqual("Dance")
    })

    it('should update the dropdown value on change', () => {
        const genreDropdown = dropdown.getByTestId("dropdown")
        fireEvent.change(genreDropdown, {target: {value: 14}})
        const options = dropdown.getAllByTestId("dropdown-option")
        expect(options[0].selected).toBeFalsy()
        expect(options[1].selected).toBeTruthy()
        expect(options[2].selected).toBeFalsy()
    })

});
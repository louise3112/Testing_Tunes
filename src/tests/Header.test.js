import React from 'react'
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {

    let header;

    beforeEach(() => {
        header = render(<Header />)
    })

    it('has a title', () => {
        const title = header.getByTestId("Title")
        expect(title.textContent).toEqual("Testing Tunes")
    })

});


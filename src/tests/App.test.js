import React from 'react'
import { render } from '@testing-library/react';
import App from '../App'

describe('App', () => {

    let app;

    beforeEach(() => {
        app = render(< App />)
    })

    it('app has a title', () => {
        const title = app.getByTestId("Title")
        expect(title.textContent).toEqual("Testing Tunes")
    })

    it('app has a footer', () => {
        const footer = app.getByTestId("Footer")
        expect(footer.textContent).toEqual("Data taken from iTunes API")
    })
});

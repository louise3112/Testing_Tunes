import React from 'react'
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {

    let footer;

    beforeEach(() => {
        footer = render(<Footer />)
    })

    it('has footer text', () => {
        const footerText = footer.getByTestId("Footer")
        expect(footerText.textContent).toEqual("Data taken from iTunes API")
    })
});

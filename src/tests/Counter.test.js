import React from "react"
import Counter from "../components/Counter"
import { render, fireEvent, waitFor } from "@testing-library/react"

describe('Counter', () => {

    let container;

    // Mount the component so it is fresh for each test:
    beforeEach(() => {
        container = render(< Counter />)
    })

    // Test content of an html tag within component:
    it('should start the counter at zero', () => {
        const counterh1 = container.getByTestId("counter")
        expect(counterh1.textContent).toEqual('0')
    })

    // Test result of an event:
    it('should incerement counter on click', () => {
        const upButton = container.getByTestId("button-up")
        fireEvent.click(upButton)
        const counterh1 = container.getByTestId("counter")
        expect(counterh1.textContent).toEqual('1')
    })

})



// app.spec.js

describe('App', () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/")
        cy.intercept('GET', "https://itunes.apple.com/gb/rss/topsongs/**").as('getSongs')
        cy.wait('@getSongs')
    })

    it("has a title", () => {
        const title = cy.get('#title');
        title.should("contain", "Testing Tunes");
    })

    it("displays details for 20 songs", () => {
        cy.get('.song-position').should('have.length', 20)
        cy.get('.song-title').should('have.length', 20)
        cy.get('.song-artist').should('have.length', 20)
        cy.get('.song-image').should('have.length', 20)
    })

    it("has a footer", () => {
        const footer = cy.get('#footer');
        footer.should("contain", "Data taken from iTunes API");
    })




})
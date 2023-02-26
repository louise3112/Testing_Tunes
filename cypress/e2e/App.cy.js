describe('App', () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/")
        cy.intercept('GET', "https://itunes.apple.com/gb/rss/topsongs/**").as('getSongs')
        cy.wait('@getSongs')
    })

    it("has a title", () => {
        cy.get('#title').should("contain", "Testing Tunes")
    })

    it("has a dropdown label", () => {
        cy.get('#label').should("contain", "Genre:")
    })

    it("has a dropdown list that starts on All", () => {
        cy.get('#genres').should("contain", "All")
    })

    it("displays details for 20 songs", () => {
        cy.get('.song-position').should('have.length', 20)
        cy.get('.song-title').should('have.length', 20)
        cy.get('.song-artist').should('have.length', 20)
        cy.get('.song-image').should('have.length', 20)
    })

    it("should be able to change the dropdown value selected", () => {
        cy.get('#genres').select(1).should('not.be.null')
    })

    it("displays details for 20 songs after dropdown change", () => {
        cy.get('#genres').select(1)
        cy.get('.song-position').should('have.length', 20)
        cy.get('.song-title').should('have.length', 20)
        cy.get('.song-artist').should('have.length', 20)
        cy.get('.song-image').should('have.length', 20)
    })

    it("should be able to play and pause song on click", () => {
        cy.get('.play-song:first').click()
        cy.wait(2000)
        cy.get('.play-song:first').click()
    })

    it("should be able to change song being played", () => {
        cy.get('.play-song:first').click()
        cy.wait(2000)
        cy.get('.play-song:last').click()
        cy.wait(2000)
        cy.get('.play-song:last').click()
    })

    it("has a footer", () => {
        cy.get('#footer').should("contain", "Data taken from iTunes API")
    })

})
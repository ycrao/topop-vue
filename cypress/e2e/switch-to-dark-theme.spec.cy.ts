describe('switch-to-dark-theme-spec', () => {
  it('visit app home page', () => {
    cy.visit('/')
    cy.get('.van-switch').click()
    // see https://docs.cypress.io/api/commands/document
    cy.document().then((doc) => {
      const theme = doc.querySelector('html')?.getAttribute('data-theme')
      expect(theme).to.eq('dark')
    })
    // see https://docs.cypress.io/api/commands/window
    cy.window().then((win) => {
      const theme = win.localStorage.getItem('theme')
      expect(theme).to.eq('dark')
    })
  })
})

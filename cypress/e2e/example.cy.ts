// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('.van-cell-group__title', '应用列表')
  })

  it('visits the zhihu hot app url', () => {
    cy.visit('/zhihu/hot')
    cy.intercept({
      method: 'GET',
      url: '/mock/api/news/zhihu',
    }).as('getZhihuHot')
    cy.wait('@getZhihuHot').should('have.nested.property', 'response.body.data')
  })
})

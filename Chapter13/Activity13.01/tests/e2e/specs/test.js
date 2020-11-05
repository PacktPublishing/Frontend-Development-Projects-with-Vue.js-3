describe('Commentator Pro', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/comments', [
      {
        body: 'Just saying...',
        email: 'evant@vuejs.org'
      }
    ]).as('getComments')
  })
  it('Has a h2 with "Commentator Pro"', () => {
    cy.visit('/')
    cy.contains('h2', 'Commentator Pro')
  })
  it('visual regression', () => {
    cy.visit('/')
    cy.get('[data-test-id="new-comment-button"]')
      .click()
    cy.wait('@getComments')
    cy.get('[data-test-id="new-comment-editor"]')
      .should('be.visible')
    cy.get('#app').toMatchImageSnapshot({
      threshold: 0.001,
    })
  })
})

describe('Loading Existing Comments', () => {
  it('should load & display comments', () => {
    cy.visit('/')
    cy.get('[data-test-id="comments-list"]')
      .should('be.visible')

    cy.get('[data-test-id="comment-card"]')
      .should('have.length.gt', 0)
  })
  it('should load and display comments correctly', () => {
    cy.server()
    cy.route('**/comments', [
      {
        body: 'Vue is getting great adoption',
        email: 'evan@vuejs.org',
        id: 100,
      },
      {
        body: 'Just saying...',
        email: 'evan@vuejs.org',
        id: 10
      },
      {
        body: 'The JS ecosystem is great',
        email: 'evan@vuejs.org',
        id: 1
      }
    ]).as('getComments')

    cy.visit('/')

    cy.wait('@getComments')

    cy.get('[data-test-id="comments-list"]')
      .should('be.visible')

    cy.get('[data-test-id="comment-card"]')
      .should('have.length', 3)

    cy.contains('[data-test-id="comment-card"]', 'Vue is getting great adoption')
      .contains('evan@vuejs.org')
    cy.contains('[data-test-id="comment-card"]', 'Just saying...')
      .contains('evan@vuejs.org')
    cy.contains('[data-test-id="comment-card"]', 'The JS ecosystem is great')
      .contains('evan@vuejs.org')
  })
})

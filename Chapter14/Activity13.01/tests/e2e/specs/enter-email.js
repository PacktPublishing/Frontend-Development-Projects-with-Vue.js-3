describe('Email input', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/comments', []).as('getComments')
  })
  it('email input should work', () => {
    cy.visit('/')
    cy.get('[data-test-id="email-input"]')
      .type('hugo@example.tld')
      .should('have.value', 'hugo@example.tld')
  })
  it('add comment button should be disabled when no email', () => {
    cy.visit('/')
    cy.get('[data-test-id="email-input"]')
      .should('have.value', '')

    cy.get('[data-test-id="new-comment-button"]')
      .should('be.disabled')

    cy.get('[data-test-id="email-input"]')
      .type('hugo@example.tld')
    
    cy.get('[data-test-id="new-comment-button"]')
      .should('not.be.disabled')
  })
  it('when adding comment, it should be created with the input email', () => {
    cy.route('POST', '**/comments', {
      body: 'My new comment',
      email: 'hugo@example.tld'
    }).as('newComment')

    cy.visit('/')

    cy.get('[data-test-id="email-input"]')
      .type('hugo@example.tld')

    cy.get('[data-test-id="new-comment-button"]')
      .should('not.be.disabled')
      .click()
    
    cy.get('[data-test-id="new-comment-editor"]')
      .type('My new comment')
    
    cy.get('[data-test-id="new-comment-submit"]')
      .should('not.be.disabled')
      .click()
    
    cy.wait('@newComment')
      .its('request.body')
      .should('deep.equal', {
        body: 'My new comment',
        email: 'hugo@example.tld'
      })
  })
})
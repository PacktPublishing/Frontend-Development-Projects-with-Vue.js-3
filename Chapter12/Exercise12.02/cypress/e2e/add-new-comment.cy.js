describe('Adding a New Comment', () => {

  it('the homepage should have a button with the right text', 
    () => {
      cy.visit('/')
      cy.contains('button', 'Add a New Comment')
  })

  it('the Add a New Comment button should toggle the editor  display on and off', () => {
    cy.visit('/')
    cy.get('[data-test-id="new-comment-editor"]').should
      ('not.exist')

    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should
      ('be.visible')

    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should
      ('not.exist')
  })

  it('the new comment editor should support text input', 
    () => {
    cy.visit('/')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should
      ('be.visible')

    cy.get('[data-test-id="new-comment-editor"]')
      .type('Just saying...')
      .should('have.value', 'Just saying...')
  })

  it('the new comment editor should have a submit button', 
    () => {
    cy.visit('/')
    cy.get('[data-test-id="new-comment-submit"]').should
      ('not.exist')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-submit"]').should
      ('be.visible')
    cy.contains('[data-test-id="new-comment-submit"]', 'Submit')
  })

  it('the new comment submit button should be disabled based on "new comment" content', () => {
    cy.visit('/')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-submit"]').should
      ('be.visible')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('be.disabled')

    cy.get('[data-test-id="new-comment-editor"]')
      .type('Just saying...')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('not.be.disabled')
  })


})


describe('Adding a New Comment', () => {
  beforeEach(() => {
    cy.server()
    // GET comments is not the concern of this test suite
    cy.route('GET', '**/comments', [])
  })
  it('the homepage should have a button with the right text', () => {
    cy.visit('/')
    cy.contains('button', 'Add a New Comment')
  })
  it('the Add a New Comment button should toggle the editor display on and off', () => {
    cy.visit('/')
    cy.get('[data-test-id="new-comment-editor"]').should('not.be.visible')

    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should('be.visible')

    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should('not.be.visible')
  })
  it('the new comment editor should support text input', () => {
    cy.visit('/')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-editor"]').should('be.visible')

    cy.get('[data-test-id="new-comment-editor"]')
      .type('Just saying...')
      .should('have.value', 'Just saying...')
  })
  it('the new comment editor should have a submit button', () => {
    cy.visit('/')
    cy.get('[data-test-id="new-comment-submit"]').should('not.be.visible')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-submit"]').should('be.visible')
    cy.contains('[data-test-id="new-comment-submit"]', 'Submit')
  })
  it('the new comment submit button should be disabled based on "new comment" content', () => {
    cy.visit('/')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-submit"]').should('be.visible')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('be.disabled')

    cy.get('[data-test-id="new-comment-editor"]')
      .type('Just saying...')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('not.be.disabled')
  })
  it('the new comment editor should show a spinner on submit', () => {
    cy.route({
      method: 'POST',
      url: '**/comments',
      delay: 1500,
      response: {}
    }).as('newComment')
    cy.visit('/')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-submit"]').should('be.visible')

    cy.get('[data-test-id="new-comment-editor"]')
      .type('Just saying...')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('not.be.disabled')
      .click()
      .should('have.class', 'spinner')
      .should('be.disabled')

    cy.wait('@newComment')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('not.have.class', 'spinner')
      .should('not.be.disabled')
  })
  it('adding a new comment should close the editor', () => {
    cy.route(
      'POST',
      '**/comments',
      { body: 'Just saying...', email: 'hi@vuejs.org' }
    ).as('newComment')
    cy.visit('/')
    // Get the editor to show
    cy.get('[data-test-id="new-comment-button"]').click()
    cy.get('[data-test-id="new-comment-submit"]').should('be.visible')

    cy.get('[data-test-id="new-comment-editor"]')
      .type('Just saying...')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('not.be.disabled')
      .click()

    cy.wait('@newComment')

    cy.get('[data-test-id="new-comment-editor"]').should('not.be.visible')
    cy.get('[data-test-id="new-comment-submit"]').should('not.be.visible')
  })
  it('submitting a new comment should POST to /comments and adds response to top of comments list', () => {
    cy.route('GET', '**/comments', [
      {
        email: 'evan@vuejs.org',
        body: 'Existing comment'
      }
    ])
    cy.route({
      method: 'POST',
      url: '**/comments',
      response: {
        email: 'evan@vuejs.org',
        body: 'Just saying...',
      },
    }).as('newComment')

    cy.visit('/')

    cy.get('[data-test-id="comment-card"]').should('have.length', 1)

    cy.get('[data-test-id="new-comment-button"]').click()

    cy.get('[data-test-id="new-comment-editor"]')
      .type('Just saying...')

    cy.get('[data-test-id="new-comment-submit"]')
      .should('not.be.disabled')
      .click()

    cy.wait('@newComment')

    cy.get('[data-test-id="comments-list"]').should('be.visible')

    cy.get('[data-test-id="comment-card"]')
      .should('have.length', 2)
      .first()
      .contains('[data-test-id="comment-card"]', 'Just saying...')
      .contains('evan@vuejs.org')
  })
})

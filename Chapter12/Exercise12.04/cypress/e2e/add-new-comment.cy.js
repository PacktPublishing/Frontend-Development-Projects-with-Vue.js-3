describe('Adding a New Comment', () => {

  beforeEach(() => {
		cy.intercept('GET','**/comments', []);
  });

  it('the homepage should have a button with the right text', 
    () => {
      cy.visit('/')
      cy.contains('button', 'Add a New Comment')
  })

  it('the Add a New Comment button should toggle the editor display on and off', () => {
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

  it('the new comment editor should show a submitting class on submit', 
    () => {

      cy.intercept(
        'POST',
        '**/comments',
        (req) => {
          req.reply({
            delay: 1500,
            response: {}
          });
        }).as('newComment');


      cy.visit('/')
      // Get the editor to show
      cy.get('[data-test-id="new-comment-button"]').click()
      cy.get('[data-test-id="new-comment-submit"]').should
        ('be.visible')

      cy.get('[data-test-id="new-comment-editor"]')
        .type('Just saying...')

      cy.get('[data-test-id="new-comment-submit"]')
        .should('not.be.disabled')
        .click()
        .should('have.class', 'submitting')
        .should('be.disabled')

      cy.wait('@newComment');

      // eventually, the submitting class should be removed
      cy.get('[data-test-id="new-comment-submit"]')
        .should('not.have.class', 'submitting')
    })

    it('adding a new comment should clear the comment text', () => {
      
      cy.intercept('POST', '**/comments', {
        body: {
          body: 'Just saying...', email: 'hi@raymondcamden.com'
        }
      }).as('newComment');

      cy.visit('/')

      // Get the editor to show
      cy.get('[data-test-id="new-comment-button"]').click()
      cy.get('[data-test-id="new-comment-submit"]').should('be.visible')

      cy.get('[data-test-id="new-comment-editor"]')
        .type('Just saying...')

      cy.get('[data-test-id="new-comment-submit"]')
        .should('not.be.disabled')
        .click()

      cy.wait('@newComment');
      cy.get('[data-test-id="new-comment-editor"]').should('have.value','')

    });
    
    it('submitting a new comment should POST to /comments and adds response to top of comments list', () => {
      
      cy.intercept('GET', '**/comments', [
        {
          email: 'evan@vuejs.org',
          body: 'Existing comment'
        }
      ]).as('newComment')

      cy.visit('/')

      cy.get('[data-test-id="comment-card"]').should
        ('have.length', 1)

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
        .contains('fakeemail@email.com')

    })


})


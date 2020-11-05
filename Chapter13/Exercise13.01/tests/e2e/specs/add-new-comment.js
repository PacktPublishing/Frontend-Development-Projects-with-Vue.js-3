describe('Adding a New Comment', () => {
  it('the homepage should have a button with the right text', () => {
    cy.visit('/')
    cy.contains('button', 'Add a New Comment')
  })
})

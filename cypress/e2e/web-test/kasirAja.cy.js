describe('template spec', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Failed Login - Wrong Credentials', () => {
    //cy.get('#email').type('salah@gmail.com')
    //cy.get('#password').type('salah')
    //cy.get('.chakra-button').click()
    cy.kasirlogin('salah@gmail.com','salah')
    cy.wait(100)
    cy.get('.chakra-alert').should('contain.text','Kredensial yang Anda berikan salah')
  })
  it('Failed Login - Invalid Email', () => {
    //cy.get('#email').type('salah')
    //cy.get('#password').type('salah')
    //cy.get('.chakra-button').click()
    cy.kasirlogin('salah','salah')
    cy.get('.chakra-alert').should('contain.text','must be a valid email')
  })
  it('Failed Login - Empty Password', () => {
    cy.get('#email').type('elva@gmail.com')
    cy.get('.chakra-button').click()
    cy.get('.chakra-alert').should('contain.text','not allowed to be empty')
  })
  it('Success Login', () => {
    cy.kasirlogin('elva@gmail.com','elva')
    cy.url().should('include','dashboard')
  })
})
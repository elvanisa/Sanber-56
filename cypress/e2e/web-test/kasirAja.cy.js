import loginPage from '../../support/pageObject/kasirLogin'

describe('KasirAja Login', () => {
  function randomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString + "@gmail.com"
    return email
  }

  let userEmail = randomEmail()

  beforeEach(() => {
    cy.visit('')
  })
  it('Failed Login - Wrong Credentials', () => {
    //cy.get('#email').type('salah@gmail.com')
    //cy.get('#password').type('salah')
    //cy.get('.chakra-button').click()
    cy.kasirlogin(userEmail,'salah')
    cy.wait(100)
    //cy.get('.chakra-alert').should('contain.text','Kredensial yang Anda berikan salah')
    cy.kasirVerify('.chakra-alert','Kredensial yang Anda berikan salah')
  })
  it('Failed Login - Invalid Email', () => {
    //cy.get('#email').type('salah')
    //cy.get('#password').type('salah')
    //cy.get('.chakra-button').click()
    cy.kasirlogin('salah','salah')
    cy.get('.chakra-alert').should('contain.text','must be a valid email')
  })
  it('Failed Login - Test Fixtures', () => {
    cy.fixture('userData.json').then((users) => {
      const userdata = users[1]
      cy.kasirlogin(userdata.email,userdata.passw)
    })
  })
  it('Failed Login - Test Fixtures2', () => {
    cy.fixture('dataBaru.json').then((users) => {
      users.invalid.forEach((userdata) => {
        cy.kasirlogin(userdata.invalid_user,userdata.invalid_passw)
        cy.get('.chakra-alert').should('be.visible')
      });
    })
  })
  it('Failed Login - Test POM', () => {
    cy.get(loginPage.email).type('POM@gmail.com')
    cy.get(loginPage.psw).type('salah')
    cy.get(loginPage.login_btn).click()
    cy.get(loginPage.error_msg).should('be.visible')
  })
  it.only('Failed Login - Test POM2', () => {
    loginPage.inputEmail('POM2@gmail.com')
    loginPage.inputPsw('POM2')
    loginPage.clickLogin()
    loginPage.verifyError()
  })
  it('Failed Login - Empty Password', () => {
    //cy.get('#email').clear().type('elva@gmail.com')
    cy.kasirKetik('#email','elva@gmail.com')
    cy.get('.chakra-button').click()
    cy.get('.chakra-alert').should('contain.text','not allowed to be empty')
  })
  it('Success Login', () => {
    cy.kasirlogin('elva@gmail.com','elva')
    cy.url().should('include','dashboard')
  })
})
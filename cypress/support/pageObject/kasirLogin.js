class loginPage {
    error_msg = '.chakra-alert'
    email = '#email'
    psw = '#password'
    login_btn = '.chakra-button'

    inputEmail(email){
        cy.get(this.email).clear().type(email)
    }
    inputPsw(psw){
        cy.get(this.psw).clear().type(psw)
    }
    clickLogin(){
        cy.get(this.login_btn).click()
    }
    verifyError(){
        cy.get(this.error_msg).should('be.visible')
    }
}
export default new loginPage()
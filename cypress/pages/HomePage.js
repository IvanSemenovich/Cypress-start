class HomePage{

    clickMyAccountButton(){
        cy.get('.accTrigger').should('be.visible').click()
    }
    checkThatModalWindowWithLogInOpened(){
        cy.get('.aside').should('be.visible')
    }
    checkThatModalWindowContainWelcomeText(){
        cy.get('.auth__heading').contains('Welcome back')
    }
    fillAllFieldsForLogIn(email, password){
        cy.get('input[name="email"]').type(email).should('have.value', email)
        cy.get('input[name="password"]').type(password).should('have.value', password)
    }
   
    clickOnLogInButton(){
        cy.get('button[type="submit"]').should('have.text','Login').should('be.visible').click()
    }

    clickOnRegistrationLink(){
        cy.get('.link').should('be.visible').contains('Create an account').click()
    }
    fillAllFieldsForRegistration(email,password){
        cy.get('input[name="first_name"]').type('QA').should('have.value', 'QA')
        cy.get('input[name="last_name"]').type('QA').should('have.value', 'QA')
        cy.get('input[name="email"]').type(email).should('have.value', email)
        cy.get('input[name="password"]').type(password).should('have.value', password)
    }
    clickOnRegistrationButton(){
        cy.get('button[type="submit"] span').should('be.visible').click();
    }
    markTermsCheckbox(){
        cy.get('.form__checkbox').click()
    }
 
   
    


}
export default HomePage;
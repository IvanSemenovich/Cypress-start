import HomePage from "../../pages/HomePage"
import MyAccount from "../../pages/MyAccountPage"

describe('Registration a new random customer', () => {
    
    it('Positive registration a new random customer', () =>{
        let homePage = new HomePage();
        let myAccount = new MyAccount();
        cy.visit('/')
        homePage.clickMyAccountButton();
        homePage.checkThatModalWindowWithLogInOpened();
        homePage.checkThatModalWindowContainWelcomeText();
        homePage.clickOnRegistrationLink();
        homePage.fillAllFieldsForRegistration(Date.now() + '@automation.com', 'Test123456');
        homePage.markTermsCheckbox();
        homePage.clickOnRegistrationButton();
        cy.wait(500);
        myAccount.checkMyAccountUrl();
        myAccount.checkMyAccountTitle();
        cy.screenshot()
    })
    
   
})
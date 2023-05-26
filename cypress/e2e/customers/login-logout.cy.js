import HomePage from "../../pages/HomePage";
import MyAccount from "../../pages/MyAccountPage";
describe('Page', () => {
   
    it('Page', () =>{
      let homePage = new HomePage();
      let myAccount = new MyAccount();
        cy.visit('/')
        homePage.clickMyAccountButton();
        homePage.checkThatModalWindowWithLogInOpened();
        homePage.checkThatModalWindowContainWelcomeText();
        homePage.fillAllFieldsForLogIn('ivansemenovichwork@gmail.com','Test123456')
        homePage.clickOnLogInButton();
        myAccount.checkMyAccountUrl();
        myAccount.checkMyAccountTitle();
        cy.screenshot();
        myAccount.clickOnLogOutButton();
        homePage.clickMyAccountButton();
        homePage.checkThatModalWindowWithLogInOpened();
        homePage.checkThatModalWindowContainWelcomeText();
    })
    
   
})
class MyAccount {

    checkMyAccountUrl(){
        cy.url().should('contain','/my-account')
    }
    checkMyAccountTitle(){
        cy.get('.order-block > h2').should('have.text','Overzicht')
    }
    logOutFromAccount(){
        cy.get('button[class="logout"]').should('be.visible')
        cy.get('button[class="logout"]').click()
    }
    clickOnLogOutButton(){
        cy.get('button.logout').scrollIntoView().should('be.visible').click()
    }
}
export default  MyAccount;
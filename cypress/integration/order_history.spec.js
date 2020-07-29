import SignInPage from '../pages/SignInPage'
import MyAccountPage from '../pages/MyAccountPage'
import OrderHistoryPage from '../pages/OrderHistoryPage'

describe('Order History Page', () => {
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        SignInPage.signIn("gabriel.test@testing.com","t3$t1ng")
    })
    it('Verify message is displayed when no orders found', () => {
        MyAccountPage.orderHistoryLink().click()
        OrderHistoryPage.notOrdersFoundMsg().contains('You have not placed any orders.')
    })
})
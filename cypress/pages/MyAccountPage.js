class MyAccountPage{

    static orderHistoryLink() { return cy.get('.myaccount-link-list a[href*="history"] span') }

    static myCreditLink() { return cy.get('.myaccount-link-list a[href*="order-slip"] span') }

    static myAddressLink() { return cy.get('.myaccount-link-list a[href*="adresses"] span') }

    static personalInfoLink() { return cy.get('.myaccount-link-list a[href*="identity"] span') }

    static myWishlistLink() { return cy.get('.myaccount-link-list a[href*="mywishlist"] span') }

}

export default MyAccountPage;
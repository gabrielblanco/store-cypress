describe('API testing examples', ()=>{
    beforeEach(()=>{
        cy.fixture('user.json').as('userData')
    })
    it('Verify the Sign In functionality - API', function() {
        const login_data = {"email": this.userData.validUser.email, "passwd" : this.userData.validUser.password}
        cy.request('POST', 'http://automationpractice.com/index.php?controller=authentication&back=my-account', login_data)
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('Verify the ability to add a product to the cart', function() {
        const prod_details = {'id_product':'4', 'controller':'cart', 'add':'1', 'ajax':'true', 'qty':'1', 'token':'a8e2f23909ef4abc7ecf3e3286b0dac9'}
        cy.request('POST', 'http://automationpractice.com/index.php?', prod_details)
        .then((response) => {
            expect(response.status).to.eq(200)
        })
        // "link":"http:\/\/automationpractice.com\/index.php?id_product=1&controller=product#\/size-s\/color-orange","quantity":1,"image":"http:\/\/automationpractice.com\/img\/p\/1\/1-home_default.jpg","image_cart":"http:\/\/automationpractice.com\/img\/p\/1\/1-cart_default.jpg","priceByLine":"$16.51","name":"Faded Short Sleeve T-shirts","price":"$16.51","price_float":16.51,"idCombination":1,"idAddressDelivery":351178,"is_gift":false,"hasAttributes":true,"attributes":"Orange, S","hasCustomizedDatas":false,"customizedDatas":[]}
    })
})
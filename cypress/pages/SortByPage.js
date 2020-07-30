class WomenPage {

    // Categories Locators
    static categoriesList() { return cy.get('#ul_layered_category_0') }

    // Size Elements Locators
    static sizesList() { return cy.get('#ul_layered_id_attribute_group_1') }

    // Color Elements Locators
    static colorsList() { return cy.get('#ul_layered_id_attribute_group_3') }

    // Compositions Elements Locators
    static compositionsList() { return cy.get('#ul_layered_id_feature_5') }

    // Styles Elements Locators
    static stylesList() { return cy.get('#ul_layered_id_feature_6') }

    // Properties Elements Locators
    static propertiesList() { return cy.get('#ul_layered_id_feature_7') }

    // Availability Locators
    static stokChkBox() { return cy.get('#layered_quantity_1') }

    // Manufacturer Locators
    static fashionChkBox() { return cy.get('#layered_manufacturer_1') }

    // Condition Locators
    static newChkBox() { return cy.get('#layered_condition_new') }

    // Price Locators
    // static leftBoxPrice() { return cy.get('.ui-slider :nth-child(2)') }
    // static rightBoxPrice() { return cy.get('.ui-slider :nth-child(3)') }

    // Selects a category randomly
    static sortByCategory() {
        let index = Math.floor(Math.random() * (3 - 1) + 1)
        cy.log(index)
        this.categoriesList().find('li:nth-child('+index+') div').click()
    }

    // Selects a size randomly
    static sortBySize() {
        let index = Math.floor(Math.random() * (4 - 1) + 1)
        cy.log(index)
        this.sizesList().find('li:nth-child('+index+') div').click()
    }

    // Selects a color randomly
    static sortByColor() {
        let index = Math.floor(Math.random() * (9 - 1) + 1)
        cy.log(index)
        this.colorsList().find('li:nth-child('+index+') input').click()
    }

    // Selects a composition randomly
    static sortByComposition() {
        let index = Math.floor(Math.random() * (4 - 1) + 1)
        cy.log(index)
        this.compositionsList().find('li:nth-child('+index+') div').click()
    }

    // Selects a style randomly
    static sortByStyle() {
        let index = Math.floor(Math.random() * (4 - 1) + 1)
        cy.log(index)
        this.stylesList().find('li:nth-child('+index+') div').click()
    }

    // Selects a property randomly
    static sortByProperty() {
        let index = Math.floor(Math.random() * (6 - 1) + 1)
        cy.log(index)
        this.propertiesList().find('li:nth-child('+index+') div').click()
    }

    static sortByAvailability() {
        this.stokChkBox().click()
    }

    static sortByManufacturer() {
        this.fashionChkBox().click()
    }





    // This fuction sort the articles by price range
    static sortByPrice(min, max) {
        // $16.00 | $53.00
        // 0.37 = 1%
        // this.leftBoxPrice().trigger('mousedown').trigger('mousemove', {left: 300}).trigger('mouseup')
    }

}

export default WomenPage;
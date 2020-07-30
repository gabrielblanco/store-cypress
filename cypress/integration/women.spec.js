import SortByPage from '../pages/SortByPage'

describe('Women Page', ()=> {
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
    })
    it('Verify the user can sort by categories', ()=>{
        // cy.get
    })
    it.only('Sort by property', ()=>{
        SortByPage.sortByProperty()
    })
})
import { BASE_URL, DEFAULT_TIMEOUT } from '../common/constant'
describe('instamotion - search car', () => {
    beforeEach(() => {
      cy.visit(BASE_URL)
      cy.viewport(1280, 720)
    })
  
    it('find car and verify details', () => {

      // Wait for cookies modal and accept it
      cy.get('#onetrust-accept-btn-handler', { timeout: DEFAULT_TIMEOUT }).should('be.visible');
      cy.get('#onetrust-accept-btn-handler').click()

      //click on find car
      cy.contains('Auto finden').click()
      //verify url
      cy.url()
         .should('include', '/autos')

      //verify
      cy.get('input').should('have.value', 'Neueste Angebote zuerst')
      
      //select brand
      cy.get('[data-testid=filters-make-dropdown]').click()
      cy.contains('BMW').click()

      //select model
     cy.get('[data-testid=filters-model-dropdown]').click()
     cy.contains('2er Reihe').click()
     
     //select fuel
     cy.get('[data-testid=filters-fuel-type-dropdown]').click()
     cy.contains('Diesel').click()
   
     // car type
     cy.get('[data-testid=filters-cartype-dropdown]').click()
     cy.contains('Limousine').click()
     
    //verify filter
    cy.contains('alle Filter entfernen').scrollIntoView().should('be.visible')
    cy.contains('BMW').should('be.visible')
    cy.contains('2er Reihe').should('be.visible')
    cy.contains('Diesel').should('be.visible')
    cy.contains('Limousine').should('be.visible')
    
   //verify images count 
    cy.get('[property=image]').should('have.length', 5)

     //verify url
     cy.url()
     .should('include', '/autos?category=LIMOUSINE&fuel=DIESEL&make=BMW&modelGroup=_2er%20Reihe&page=1&page-size=27&paymentType=monthlyRate&sort-by=date_published::desc&v3')
    }) 
  })
  
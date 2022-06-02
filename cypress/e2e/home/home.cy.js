import { BASE_URL, DEFAULT_TIMEOUT } from '../common/constant'
describe('instamotion - home page', () => {
    beforeEach(() => {
      cy.visit(BASE_URL)
      cy.viewport(1280, 720)
    })

    it('verify home page details', () => {
      //verify base url
      cy.url()
         .should('include', BASE_URL)

      // Wait for cookies modal and accept it
      cy.get('#onetrust-accept-btn-handler', { timeout: DEFAULT_TIMEOUT }).should('be.visible');
      cy.get('#onetrust-accept-btn-handler').click()

      //verify auto finden
      cy.contains('Auto finden').click()
      cy.url()
         .should('include', '/autos')

      
      //verify Angebote
      cy.contains('Angebote').click()
      cy.url()
         .should('include', '/deals')
      
      //verify Warum instamotion
       cy.contains('Warum instamotion').click()
       cy.url()
       .should('include', '/warum-instamotion')
    
       //verify So funktioniert's
      cy.contains("So funktioniert's").click()
      cy.url()
      .should('include', '/so-funktionierts')
     
      //verify FAQ 
      cy.contains("FAQ").click()
       cy.url()
       .should('include', '/ueber/faq')
      
      //verify Favoriten
      cy.contains("Favoriten").click()
       cy.url()
       .should('include', '/favoriten')
      
       //verify contact
      cy.contains("089 2109 4444").should('be.visible')   
      
      //verify footer details
      assert.isTrue(true, cy.contains('Eine Beteiligungsgesellschaft der'))
      assert.isTrue(true, cy.contains('Auto'))
      assert.isTrue(true, cy.contains('Rechtliches'))
      assert.isTrue(true, cy.contains('Instamotion'))  
      assert.isTrue(true, cy.contains('Instamotion'))  
      assert.isTrue(true, cy.contains('Deine Vorteile'))  
    })
  })
  
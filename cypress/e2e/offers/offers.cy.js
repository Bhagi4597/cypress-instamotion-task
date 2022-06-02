import { BASE_URL, DEFAULT_TIMEOUT } from '../common/constant'
describe('instamotion - offers', () => {
    beforeEach(() => {
      cy.visit(BASE_URL)
      cy.viewport(1280, 720)
    })

    it('find offers and verify it', () => {
      
     // Wait for cookies modal and accept it
      cy.get('#onetrust-accept-btn-handler', { timeout: DEFAULT_TIMEOUT }).should('be.visible');
      cy.get('#onetrust-accept-btn-handler').click()
      
      //verify Angebote
      cy.contains('Angebote').click()
      cy.url()
         .should('include', '/deals')
      

     
      // verify contents
      cy.contains('Gebrauchtwagen Deals und Aktionsangebote').should('be.visible')      
      assert.isTrue(true, cy.contains('Lagerfahrzeuge'))  
      assert.isTrue(true, cy.contains('Top Gebrauchte'))  
      assert.isTrue(true, cy.contains('Tageszulassungen')) 
      cy.get('img[src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmmyb8qsa37v%2FCKkMdpw8dagHzjKuTkCuV%2Fc18fd450778a1c4369bf8f9b05d31cf1%2FIM_Lagerfahrzeuge_300x230.png&w=3840&q=75"]').should('be.visible')
      cy.get('img[src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmmyb8qsa37v%2F3zGDn0sujeCltifQFCoIrj%2F8dc1710e1fd87eef9088482e44f2208f%2FIM_unter10k_300x320.png&w=3840&q=75"]').should('be.visible')
      cy.get('img[src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmmyb8qsa37v%2F53xfPwBLe2fgnBXf3Cl7DR%2F80cb09a5f4cd6404508a08dd347fa759%2Ftageszulassung_unter100_300x230.png&w=3840&q=75"]').should('be.visible')

      // click on offer
      cy.get('img[src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fpmmyb8qsa37v%2F3zGDn0sujeCltifQFCoIrj%2F8dc1710e1fd87eef9088482e44f2208f%2FIM_unter10k_300x320.png&w=3840&q=75"]').click()

      //verify offer result
      assert.isTrue(true, cy.contains('Suche speichern'))  
      cy.get('input').should('have.value', 'Niedrigster Preis/Rate')
      cy.get('[property=image]').should('have.length', 27)
     })
    
  })
  
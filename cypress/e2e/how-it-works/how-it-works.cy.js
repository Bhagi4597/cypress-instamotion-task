import { BASE_URL, DEFAULT_TIMEOUT } from '../common/constant'
describe('instamotion - how it works', () => {
    beforeEach(() => {
      cy.visit(BASE_URL)
      cy.viewport(1280, 720)
    })

    it('how it works', () => {
      // Wait for cookies modal and accept it
      cy.get('#onetrust-accept-btn-handler', { timeout: DEFAULT_TIMEOUT }).should('be.visible');
      cy.get('#onetrust-accept-btn-handler').click()

      // click on how it works and verify
      cy.contains("So funktioniert's").click() 
      cy.url()
      .should('include', '/so-funktionierts')

      // verify contents
      cy.contains('Wähle Dein Wunschauto aus').should('be.visible')
      cy.contains('Finde Deine Finanzierung').should('be.visible')
      cy.contains('Lieferung zu Dir nach Hause').should('be.visible')
      cy.contains('Zulassung – ohne Stress').should('be.visible')

      assert.isTrue(true, cy.contains('Alles im Detail'))  
      assert.isTrue(true, cy.contains("Wir erklären Dir den Ablauf des Kaufs von Deinem Wunschauto hier noch einmal im Detail."))
      assert.isTrue(true, cy.contains('#1 Wähle Dein Wunschauto aus'))  
      assert.isTrue(true, cy.contains('#2 Finde Deine Finanzierung'))  
      assert.isTrue(true, cy.contains('#3 Zulassung – ohne Stress'))  
      assert.isTrue(true, cy.contains('#4 Lieferung vor Deine Haustür'))  
      assert.isTrue(true, cy.contains('Wir an Deiner Seite'))  
      assert.isTrue(true, cy.contains('Mehr zu unseren Zusatzleistungen'))  
    })
    
  })
  
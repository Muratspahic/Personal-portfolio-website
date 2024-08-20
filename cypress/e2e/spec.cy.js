describe('My first test', () => {
  it('finds the content "UI Design"', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.contains('UI Design')
  })

  it('finds the content "type"', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.contains('type')
  })

  it('finds the content "Testing"', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.contains('Testing')
  })

  it('finds the content "2023"', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.contains("2023")
  })

  it('clicks the link "Services"', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.contains('Services').click()
  })

  it('fills out and submits the form', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.input-group .input-box').eq(0).find('input').eq(0).type('Emir Pepi')
    cy.get('.input-group .input-box').eq(0).find('input').eq(1).type('emir@pepi.gmail')
    cy.get('.input-group .input-box').eq(1).find('input').eq(0).type('12345')
    cy.get('.input-group .input-box').eq(1).find('input').eq(1).type('test test test')
    cy.get('.input-group-2').find('textarea').type('This is a test message.')
  })

  it('change the background color of the testimonials section', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('.testimonials').invoke('css', 'background-color', '#f0f0f0')
    cy.get('.testimonials').should('have.css', 'background-color', 'rgb(240, 240, 240)')
  })
})




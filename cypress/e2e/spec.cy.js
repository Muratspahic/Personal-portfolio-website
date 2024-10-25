describe('Elements Visibility Test', () => {
 beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/');
  });

  it('should be visible: logo, navbar and all links', () => {
    cy.get('.logo').should('be.visible');
    cy.get('.navbar').should('be.visible');

    cy.get('a.active').contains('Home').should('be.visible');
    cy.get('a.active').contains('Home').click();
    cy.url().should('include', '#home');

    cy.get('a').contains('Education').should('be.visible');
    cy.get('a').contains('Education').click();
    cy.url().should('include', '#education');

    cy.get('a').contains('Services').should('be.visible');
    cy.get('a').contains('Services').click();
    cy.url().should('include', '#services');

    cy.get('a').contains('Testimonials').should('be.visible');
    cy.get('a').contains('Testimonials').click();
        cy.url().should('include', '#testimonials');

    cy.get('a').contains('Contact').should('be.visible');
    cy.get('a').contains('Contact').click();
    cy.url().should('include', '#contact');
  });

  it('should be visible: home section elements', () => {
    cy.get('.home-content h1').should('be.visible');
    cy.get('.home-content h1').contains("Hi, It's Pepi").should('be.visible');
    cy.get('.home-content h3.text-animation').should('be.visible');
    cy.get('.home-content p').should('be.visible');
    cy.get('.social-icons').should('be.visible');
    cy.get('.social-icons a').should('have.length', 4);

    cy.get('.btn-group').should('be.visible');
    cy.get('.btn-group a.btn').should('have.length', 2);
    cy.get('.btn-group a.btn').contains('Hire').should('be.visible');
    cy.get('.btn-group a.btn').contains('Contact').should('be.visible');

    cy.get('.home-img img').should('be.visible');
    cy.get('.home-img img').should('have.attr', 'alt', '');
  });

  it('should be visible: education section and its elements', () => {
    cy.get('.education').should('be.visible');
    cy.get('.education h2.heading').should('be.visible').contains('Education');
    cy.get('.timeline-items').should('be.visible');
    cy.get('.timeline-item').should('have.length', 4);

    const educationItems = [
        { year: '2021', title: 'High School' },
        { year: '2022', title: 'University' },
        { year: '2023', title: 'Internship' },
        { year: '2024', title: 'Job' },
    ];

    educationItems.forEach(item => {
        cy.get('.timeline-date').contains(item.year).should('be.visible');
        cy.get('.timeline-content h3').contains(item.title).should('be.visible');
    });

    cy.get('.timeline-item').each(($item) => {
        cy.wrap($item).find('p').should('be.visible');
    });
  });
});







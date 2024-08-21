describe('My first test', () => {
  it('finds the content "UI Design"', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.contains('UI Design');
  });

  it('finds the content "type"', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.contains('type');
  });

  it('finds the content "Testing"', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.contains('Testing');
  });

  it('finds the content "2023"', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.contains("2023");
  });

  it('clicks the link "Services"', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.contains('Services').click();
  });

  it('fills out and submits the form', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.get('.input-group .input-box').eq(0).find('input').eq(0).type('Emir Pepi');
    cy.get('.input-group .input-box').eq(0).find('input').eq(1).type('emir@pepi.gmail');
    cy.get('.input-group .input-box').eq(1).find('input').eq(0).type('12345');
    cy.get('.input-group .input-box').eq(1).find('input').eq(1).type('test test test');
    cy.get('.input-group-2').find('textarea').type('This is a test message.');
  });

  it('change the background color of the testimonials section', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.get('.testimonials').invoke('css', 'background-color', '#f0f0f0');
    cy.get('.testimonials').should('have.css', 'background-color', 'rgb(240, 240, 240)');
  });

  it('change the color of h2.heading', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.get('h2.heading')
      .invoke('css', 'color', 'gold')
    cy.get('h2.heading')
      .should('have.css', 'color', 'rgb(255, 215, 0)')
  });

  it('should change colors of timeline dates', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.get('div.timeline-date').each(($el, index) => {
      const year = $el.text().trim();

      let color;
      switch (year) {
        case '2021':
          color = 'rgb(255, 0, 0)';
          break;
        case '2022':
          color = 'rgb(0, 255, 0)';
          break;
        case '2023':
          color = 'rgb(0, 0, 255)';
          break;
        case '2024':
          color = 'rgb(255, 255, 0)';
          break;
        default:
          color = 'rgb(0, 0, 0)';
      }

      cy.wrap($el).invoke('css', 'color', color);
    });

    cy.get('div.timeline-date').each(($el) => {
      const year = $el.text().trim();
      let expectedColor;
      switch (year) {
        case '2021':
          expectedColor = 'rgb(255, 0, 0)';
          break;
        case '2022':
          expectedColor = 'rgb(0, 255, 0)';
          break;
        case '2023':
          expectedColor = 'rgb(0, 0, 255)';
          break;
        case '2024':
          expectedColor = 'rgb(255, 255, 0)';
          break;
        default:
          expectedColor = 'rgb(0, 0, 0)';
      }

      cy.wrap($el).should('have.css', 'color', expectedColor);
    });
  });
});

describe('Responsivnost aplikacije za ekran širine do 990px', () => {

  it('prikaz na ekranima do 990px', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.viewport(990, 800);
    cy.get('.header').should('be.visible');
    cy.get('.sidebar').should('not.exist');
  });
});

describe('Testiranje performansi učitavanja stranice', () => {

  it('mjerenje vremena učitavanja početne stranice', () => {
    cy.visit('http://127.0.0.1:5500/').then(() => {

      cy.window().then((win) => {
        const { performance } = win;
        const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        cy.log(`Vrijeme učitavanja stranice: ${loadTime} ms`);

        expect(loadTime).to.be.lessThan(2000);
      });
    });
  });
});






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

  it('should exist and be visible', () => {
    cy.get('#services').should('exist').and('be.visible');
  });

  it('should contain the correct number of service boxes', () => {
      cy.get('.service-box').should('have.length', 4);
  });

  const services = [
      {
          title: 'UI Design',
          description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      },
      {
          title: 'Frontend Development',
          description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      },
      {
          title: 'Backend Development',
          description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      },
      {
          title: 'Testing',
          description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
      }
  ];

  services.forEach((service, index) => {
    it(`should display service box for ${service.title}`, () => {
      cy.get('.service-box').eq(index)
          .should('be.visible')
          .within(() => {
            cy.get('h4').should('contain', service.title);
            cy.get('p').should('contain', service.description);
          });
      });
  });

  it('should exist and be visible', () => {
    cy.get('#testimonials').should('exist').and('be.visible');
  });

  it('should contain the correct number of testimonials', () => {
      cy.get('.testimonial-item').should('have.length', 3);
  });

  const testimonials = [
      {
          name: 'Marilia',
          image: 'Images/img4.jpg',
          text: '"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."'
      },
      {
          name: 'Julia',
          image: 'Images/img2.jpg',
          text: '"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."'
      },
      {
          name: 'Maria',
          image: 'Images/img3.jpg',
          text: '"Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."'
      }
  ];

  testimonials.forEach((testimonial, index) => {
      it(`should display testimonial for ${testimonial.name}`, () => {
          cy.get('.testimonial-item').eq(index)
              .should('be.visible')
              .within(() => {
                  cy.get('img').should('have.attr', 'src', testimonial.image);
                  cy.get('h2').should('contain', testimonial.name);
                  cy.get('p').should('contain', testimonial.text);
              });
      });

      it(`should display the correct number of stars for ${testimonial.name}`, () => {
          cy.get('.testimonial-item').eq(index).find('.rating i').should('have.length', 5);
      });
  });
});







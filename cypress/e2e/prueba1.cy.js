describe('1. Repositorio test Cypress sencillo', () => {

    beforeEach(() => { 
      cy.visit('https://todomvc.com/examples/react/dist/#/');
    });
    
    it('Añadir tarea', () => {
        cy.get('[data-testid="text-input"]')
      .click()
      .type('Pasear al Perro')
      .type('{enter}')
    })

    it('Marcar tarea', () => {
        cy.get('[data-testid="text-input"]')
      .click()
      .type('Pasear al Perro')
      .type('{enter}')
        cy.get('input[data-testid="todo-item-toggle"]')
        .click()
    })

    it('Desmarcar tarea', () => {
        cy.get('[data-testid="text-input"]')
      .click()
      .type('Pasear al Perro')
      .type('{enter}')
        cy.get('input[data-testid="todo-item-toggle"]')
        .click()
        cy.get('[data-testid="todo-item-toggle"]')
        .click()
    })

})
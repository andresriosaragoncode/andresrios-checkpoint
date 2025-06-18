/// <reference types="cypress" />

Cypress.Commands.add("seedDatabase", (endpoint) => {
  cy.request({
    method: "post",
    url: "/api/seed",
    timeout: 50000,
    body: { url: endpoint },
  });
});

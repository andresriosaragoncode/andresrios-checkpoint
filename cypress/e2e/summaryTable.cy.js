const url = "summary";

describe("SummaryTable", () => {
  before(function () {
    cy.seedDatabase();
  });

  it("Login with existing user and and submit a standup", function () {
    cy.visit(url);
    cy.get(`[data-testid=loginUsernamedInput]`).type("jon");
    cy.get(`[data-testid=loginPasswordInput]`).type("masterPassword");
    cy.get(`[data-testid=loginButton]`).click();
    // REDIRECT TO SUMMARY
    cy.wait(5000);
    cy.url().should("contain", "/summary");
    cy.get(`[data-testid=summaryTable]`).should("exist");
    // IF USER HAS NOT CREATED TODAYS STANDUP THEY WILL BE PROMPTED TO CREATE
    cy.get(`[data-testid=createdAtText]`).should(
      "include.text",
      "Remember to Create todays Standup"
    );

    cy.get(`[data-testid=mobileMenuToggle]`).click();
    cy.get(`[data-testid=mobileMenu_dailyupdate]`).click();
    // NAVIGATE TO CREATE STANDUP
    cy.get(`[data-testid=todayInput]`).type("this is today standup");
    cy.get(`[data-testid=yesterdayInput]`).type("this is yesterday standup");
    cy.get(`[data-testid=blockersInput]`).type("this is blocker standup");
    // AS THE USER TYPES THE PREVIEW UPDATES
    cy.get(`[data-testid=todayPreview]`).should(
      "include.text",
      "this is today standup"
    );
    cy.get(`[data-testid=yesterdayPreview]`).should(
      "include.text",
      "this is yesterday standup"
    );
    cy.get(`[data-testid=blockersPreview]`).should(
      "include.text",
      "this is blocker standup"
    );
    cy.get(`[data-testid=submitStandupButton]`).click();
    // REDIRECT TO SUMMARY AGAIN
    cy.wait(5000);
    cy.url().should("contain", "/summary");
    // NOW THE USER CAN EDIT THE STANDUP
    cy.get(`[data-testid=createdAtText]`).should(
      "include.text",
      "You can edit todays standup"
    );
    // NAVIGATE BACK TO CREATE STANDUP
    cy.get(`[data-testid=mobileMenuToggle]`).click();
    cy.get(`[data-testid=mobileMenu_dailyupdate]`).click();
    cy.wait(5000);
    cy.url().should("contain", "/dailyupdate");
    // FORM IS ALREADY filed with the values form standup
    cy.get(`[data-testid=todayInput]`).should(
      "include.text",
      "this is today standup"
    );
    cy.get(`[data-testid=yesterdayInput]`).should(
      "include.text",
      "this is yesterday standup"
    );
    cy.get(`[data-testid=blockersInput]`).should(
      "include.text",
      "this is blocker standup"
    );

    //todayInput

    //form fields
  });
});

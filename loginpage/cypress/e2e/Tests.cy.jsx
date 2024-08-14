describe("LoginForm", () => {
  it("should display an error message when password is missing", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("test@example.com");
    cy.get('button[type="submit"]').click();

    cy.get("div").contains("Password is required").should("exist");
  });
  it("should display an error message when email is missing", () => {
    cy.visit("/login");

    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.get("div").contains("Email is required").should("exist");
  });
  it("should display a success message when both email and password are provided", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.get("div").contains("Successfully logged in").should("exist");
  });
});

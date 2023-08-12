describe("Initial State", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Items count should be 0", () => {
    cy.get("[data-cy='cartItems']").contains("0");
  });

  it("Refresh button should empty cart", () => {
    cy.get("[data-cy='itemIncrementCount']").first().click();

    cy.get("[data-cy='cartItems']").contains("1");

    cy.get("[data-cy='cartReset']").click();

    cy.get("[data-cy='cartItems']").contains("0");
  });

  it("App Restart button should be disabled", () => {
    cy.get("[data-cy='appRefresh']")
      .should("have.attr", "disabled")
      .should("equal", "disabled");
  });

  it("App Restart button should be enabled when all items are deleted", () => {
    cy.get("[data-cy='itemDelete']").each(($el, index, list) => {
      cy.wrap($el).click();
    });

    // Ensure that all items are deleted.
    cy.get("[data-cy='itemDelete']").should("have.length", 0);

    cy.get("[data-cy='appRefresh']").should("not.have.attr", "disabled");
  });

  it("App Restart button should reload the page", () => {
    cy.get("[data-cy='itemDelete']").each(($el, index, list) => {
      cy.wrap($el).click();
    });

    // Ensure that all items are deleted.
    cy.get("[data-cy='itemDelete']").should("have.length", 0);

    cy.window().then((w) => (w.beforeReload = true));
    cy.window().should("have.prop", "beforeReload", true);
    cy.get("[data-cy='appRefresh']").click();
    cy.window().should("not.have.prop", "beforeReload");
  });
});

describe("Initial State", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Cart should have 0 items", () => {
    cy.get("[data-cy='cartItems']").contains("0");
  });

  it("All Items should have count as 'Zero'", () => {
    cy.get("[data-cy='itemCount']").should("have.length", 4);
    cy.get("[data-cy='itemCount']").each(($el, index, list) => {
      // Returns the elements from the cy.get command

      // Returns the current element from the loop
      cy.wrap($el).contains("Zero");
    });
  });

  it("Decrement button should be disabled", () => {
    cy.get("[data-cy='itemDecrementCount']").each(($el, index, list) => {
      cy.wrap($el).should("have.attr", "disabled").should("equal", "disabled");
    });
  });
});

describe("Cart Operations", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Increment item quantity", () => {
    cy.get("[data-cy='itemIncrementCount']").first().click();

    cy.get("[data-cy='itemCount']").first().contains("1");
  });

  it("Decrement item quantity", () => {
    cy.get("[data-cy='itemIncrementCount']").first().click();

    cy.get("[data-cy='itemCount']").first().contains("1");

    cy.get("[data-cy='itemDecrementCount']").first().click();

    cy.get("[data-cy='itemCount']").first().contains("Zero");
  });

  it("Delete Item", () => {
    cy.get("[data-cy='itemDelete']").first().click();
    cy.get("[data-cy='itemCount']").should("have.length", 3);
  });
});

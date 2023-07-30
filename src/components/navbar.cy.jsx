import NavBar from "./navbar";

describe("Navbar", () => {
  it("should show the total items", () => {
    const count = 10;

    cy.mount(<NavBar totalCounters={count} />);

    cy.get(".badge").contains("10");
  });
});

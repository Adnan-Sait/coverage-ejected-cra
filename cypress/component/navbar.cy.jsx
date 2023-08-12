import React from "react";
import NavBar from "../../src/components/navbar";

describe("Navbar", () => {
  it("should show the total items", () => {
    const count = 10;

    cy.mount(<NavBar totalCounters={count} />);

    cy.get(".badge").contains("10");
  });
});

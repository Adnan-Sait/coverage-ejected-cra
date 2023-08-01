import React from "react";
import Counters from "../../src/components/counters";
import { counters } from "../fixtures/testdata/counter.constants";

describe("Counters.cy.jsx", () => {
  it("should render the counter items", () => {
    cy.mount(<Counters counters={counters} />);

    cy.get("[data-cy=itemCount]").should("have.length", 4);
  });

  it("should have the reset button enabled and refresh button disabled when counter items are present", () => {
    cy.mount(<Counters counters={counters} />);

    cy.get("[data-cy=itemCount]").should("have.length", 4);
    cy.get("[data-cy=cartReset]")
      .invoke("attr", "disabled")
      .should("not.equal", "disabled");
    cy.get("[data-cy=appRefresh]")
      .invoke("attr", "disabled")
      .should("equal", "disabled");
  });

  it("should have the reset button disabled and refresh button enabled when counter is empty", () => {
    cy.mount(<Counters counters={[]} />);

    cy.get("[data-cy=itemCount]").should("have.length", 0);
    cy.get("[data-cy=cartReset]")
      .invoke("attr", "disabled")
      .should("equal", "disabled");
    cy.get("[data-cy=appRefresh]")
      .invoke("attr", "disabled")
      .should("not.equal", "disabled");
  });

  it("should invoke reset function on reset button click", () => {
    const resetFunctionStub = cy.stub().as("reset-stub");
    cy.mount(<Counters counters={counters} onReset={resetFunctionStub} />);

    cy.get("[data-cy=cartReset]").click();
    cy.get("@reset-stub").should("have.been.calledOnce");
  });

  it("should invoke refresh function on refresh button click", () => {
    const refreshFunctionStub = cy.stub().as("refresh-stub");
    cy.mount(<Counters counters={[]} onRestart={refreshFunctionStub} />);

    cy.get("[data-cy=appRefresh]").click();
    cy.get("@refresh-stub").should("have.been.calledOnce");
  });
});

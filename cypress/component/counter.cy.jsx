import React from "react";
import Counter from "../../src/components/counter";
import {
  counterWithVal,
  counterZeroVal,
} from "../fixtures/testdata/counter.constants";

describe("Counter", () => {
  it("should have itemCount as Zero and warning styling", () => {
    cy.mount(<Counter counter={counterZeroVal} />);

    cy.get("[data-cy='itemCount']").contains("Zero");
    cy.get("[data-cy='itemCount']").should("have.class", "badge-warning");
  });

  it("should have decrement button disabled when itemCount is zero", () => {
    cy.mount(<Counter counter={counterZeroVal} />);

    cy.get("[data-cy='itemDecrementCount']")
      .invoke("attr", "disabled")
      .should("equal", "disabled");
  });

  it("should have itemCount as value and primary styling", () => {
    cy.mount(<Counter counter={counterWithVal} />);

    cy.get("[data-cy='itemCount']").contains(counterWithVal.value);
    cy.get("[data-cy='itemCount']").should("have.class", "badge-primary");
  });

  it("increment button should trigger increment prop function", () => {
    const counterProp = counterZeroVal;
    const incrementStub = cy.stub().as("increment-stub");

    cy.mount(<Counter counter={counterProp} onIncrement={incrementStub} />);

    cy.get("[data-cy='itemIncrementCount']").click();
    cy.get("@increment-stub").should("have.been.calledOnceWith", counterProp);
  });

  it("decrement button should trigger decrement prop function", () => {
    const counterProp = counterWithVal;
    const decrementStub = cy.stub().as("decrement-stub");

    cy.mount(<Counter counter={counterProp} onDecrement={decrementStub} />);

    cy.get("[data-cy='itemDecrementCount']").click();
    cy.get("@decrement-stub").should("have.been.calledOnceWith", counterProp);
  });

  it("delete button should trigger delete function", () => {
    const counterProp = counterZeroVal;
    const deleteStub = cy.stub().as("delete-stub");

    cy.mount(<Counter counter={counterProp} onDelete={deleteStub} />);

    cy.get("[data-cy='itemDelete']").click();
    cy.get("@delete-stub").should("have.been.calledOnceWith", counterProp.id);
  });
});

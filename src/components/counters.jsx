import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, onDecrement, counters, onRestart } =
      this.props;
    return (
      <div>
        <div className="row">
          <div className="">
            <button
              className="btn btn-success m-2"
              data-cy="cartReset"
              onClick={onReset}
              disabled={counters.length === 0 ? "disabled" : ""}
            >
              <i className="fa fa-refresh" aria-hidden="true" />
            </button>
            <button
              className="btn btn-primary m-2"
              data-cy="appRefresh"
              onClick={onRestart}
              disabled={counters.length !== 0 ? "disabled" : ""}
            >
              <i className="fa fa-recycle" aria-hidden="true" />
            </button>
          </div>
        </div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

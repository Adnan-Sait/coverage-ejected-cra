import React, { Component } from "react";

class Order extends Component {
  render() {
    return (
      <div>
        <p>Order Value: {this.props.orderValue}</p>
        <button>Place Order</button>
      </div>
    );
  }
}

export default Order;

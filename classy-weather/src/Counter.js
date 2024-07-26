import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  }

  handleIncrement() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

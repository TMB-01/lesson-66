import React, { Component } from "react";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
        <button onClick={() => this.props.addNumber(5)}>add number</button>
        <button onClick={() => this.props.subtractNumber(5)}>
          subtract number
        </button>
      </div>
    );
  }
}

export default CounterButton;

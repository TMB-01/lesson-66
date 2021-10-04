import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("component rendered");
    return (
      <div>
        <h1>LifeCycle</h1>
      </div>
    );
  }
}

export default LifeCycle;

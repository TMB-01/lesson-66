import React, { Component } from "react";
import CounterButton from "../../components/counterButton";
import CounterView from "../../components/counterView";
import LifeCycle from "../../components/lifeCycle";
import "./main.css";
import "./main.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isLifeCycle: true,
    };
  }
  render() {
    const increment = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };

    const decrement = () => {
      this.setState({
        counter: this.state.counter - 1,
      });
    };

    const addNumber = (number) => {
      this.setState({
        counter: this.state.counter + number,
      });
    };
    const subtractNumber = (number) => {
      this.setState({
        counter: this.state.counter - number,
      });
    };

    const toggle = () => {
      this.setState({
        isLifeCycle: !this.state.isLifeCycle,
      });
    };
    return (
      <div className="counter-box">
        <CounterView counterNumber={this.state.counter} />
        <CounterButton
          increment={increment}
          decrement={decrement}
          addNumber={addNumber}
          subtractNumber={subtractNumber}
        />
        {this.state.isLifeCycle ? <LifeCycle /> : ""}
        <button onClick={toggle}>toggle</button>



      </div>
    );
  }
}

export default MainPage;

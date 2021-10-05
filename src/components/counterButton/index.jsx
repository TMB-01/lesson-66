import React, { Component } from "react";
import { StyledButton, StyledButtonAddOne,ButtonWrapper } from "./styles";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ButtonWrapper>
        <StyledButtonAddOne onClick={this.props.increment}>
          increment
        </StyledButtonAddOne>
        <StyledButton className={"button"} onClick={this.props.decrement}>decrement</StyledButton>
        <StyledButton onClick={() => this.props.addNumber(5)}>
          add number
        </StyledButton>
        <StyledButton onClick={() => this.props.subtractNumber(5)}>
          subtract number
        </StyledButton>
      </ButtonWrapper>
    );
  }
}

export default CounterButton;

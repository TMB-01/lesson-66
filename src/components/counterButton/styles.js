import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: lightblue !important;
  border-radius: 10px;
  color: blue;
  border: 0;
`;

export const StyledButtonAddOne = styled.button`
  background-color: lightgreen !important;
  color: green;
`;

export const ButtonWrapper = styled.div`
  box-shadow: 0 0 10px grey;
  padding: 30px;
  button {
    border-radius: 100px;
  }

  .button {
    font-size: 20px;
  }

  &:focus {
    background-color: lightgrey;
  }
`;

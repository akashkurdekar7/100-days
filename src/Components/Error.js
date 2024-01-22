import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <h1 className="main-heading">error</h1>
      <Link to="/">
        <button className="button">Home</button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .button {
    color: red;
    width: 50%;
    height: 100px;
    font-size: 3rem;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;
export default Error;

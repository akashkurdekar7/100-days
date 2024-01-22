import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const boxes = Array.from({ length: 100 }, (_, index) => index + 1);
  return (
    <Wrapper>
      <h1 className="main-heading">Home Page</h1>
      <h3 className="sub-heading">
        100 <span>Days</span> 100 <span>Websites</span>
      </h3>
      <div className="container">
        {boxes.map((number) => (
          <Link className="box-link" key={number} to={`/box/${number}`}>
            <div className="box">{number}</div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .box {
      width: 50px;
      height: 50px;
      border: 1px solid black;
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.1s ease;
      &:hover {
        transform: scale(1.2);
        font-size: 1.2rem;
        font-weight: 600;
        color: black;
      }
    }
  }
`;

export default Home;

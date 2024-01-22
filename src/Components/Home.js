import React from "react";
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <h1 className="main-heading">Home Page</h1>
      <h3 className="sub-heading">
        100 <span>Days</span> 100 <span>Websites</span>
      </h3>
      <div className="container"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border: 3px solid red;
  .main-heading {
    font-size: 2.5rem;
    text-align: center;
  }
  .sub-heading {
    font-size: 2rem;
    text-align: center;
    span {
      color: red;
      text-transform: uppercase;
    }
  }
`;
export default Home;

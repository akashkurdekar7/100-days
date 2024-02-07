import React from "react";
import { styled } from "styled-components";

const Card = () => {
  return (
    <Wrapper>
      <div className="card">
        <div className="container">
          <div className="box">
            <div className="circle"></div>
          </div>
          <div className="info">
            <h1 className="name">Akash Kurdekar</h1>
            <p className="profession">Software Engineer</p>
            <div className="f-sec">
              <p className="follower-section">
                <span>500</span>
                <p>Followers</p>
              </p>
              <p className="following-section">
                <span>300</span>
                <p>Following</p>
              </p>
            </div>
            <button type="submit">Follow</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    border: 3px solid black;
    width: 350px;
    height: 350px;
    border-radius: 10px;
  }
  .container {
    width: 100%;
    height: 100%;
  }
  .box {
    background-color: tomato;
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle {
    position: absolute;
    top: 55px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
  }
  .info {
    font-family: "Roboto", sans-serif;
    margin-top: 55px;
    text-align: center;
  }
  .f-sec {
    border: 1px solid red;
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .follower-section {
  }
  .following-section {
  }
`;
export default Card;

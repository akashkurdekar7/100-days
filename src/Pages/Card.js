import React from "react";
import { styled } from "styled-components";
import profileImage from "../images/3.jpg";

const Card = () => {
  return (
    <Wrapper>
      <div className="card">
        <div className="container">
          <div className="box">
            <div className="circle">
              <img src={profileImage} alt="profile-image" />
            </div>
          </div>
          <div className="info">
            <h1 className="name">Akash Kurdekar</h1>
            <p className="profession">Software Engineer</p>
            <div className="f-sec">
              <p>
                <span>500</span>
                <p>Followers</p>
              </p>
              <p>
                <span>300</span>
                <p>Following</p>
              </p>
            </div>
            <button className="button" type="submit">
              Follow
            </button>
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
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    font-family: "Roboto", sans-serif;
    margin-top: 55px;
    text-align: center;
  }
  .f-sec {
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 10px auto;
  }
  .button {
    margin-top: 20px;
    font-size: 1rem;
    width: 5rem;
    height: 2.5rem;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    color: black;
    transition: all 0.3s linear;
    &:hover {
      background-color: orange;
    }
    &:active {
      background-color: white;
    }
  }
`;
export default Card;

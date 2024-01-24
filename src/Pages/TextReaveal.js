import React from "react";
import { styled } from "styled-components";

const TextReveal = () => {
  return (
    <Wrapper>
      <div className="main-content">
        <div className="col1">
          <p className="anime-text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur.....
            </span>
          </p>
          <p className="anime-text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur.....
            </span>
          </p>
        </div>
        <div className="col2">
          <p className="anime-text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur.....
            </span>
          </p>
          <p className="anime-text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur.....
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-content {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & .col1,
    .col2 {
      flex-direction: column;
    }

    & .anime-text {
      & span {
        color: hsl(0 0% 100% / 0.2);
        /* color: black; */
        background-clip: text;
        background-size: 0% 100%;
        background-repeat: no-repeat;
        text-align: center;
        background-image: linear-gradient(90deg, white, white);
        animation: text-reveal 1s linear forwards;
        animation-delay: 0.5s; // Adjust the delay as needed
      }
    }
  }

  @keyframes text-reveal {
    to {
      background-size: 100% 100%;
    }
  }
`;

export default TextReveal;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const ChangingBg = () => {
  const Button = Array.from({ length: 5 }, (_, index) => index + 1);
  const { number } = useParams();
  const [selectedBox, setSelectedBox] = useState(null);
  const getImgSource = () => {
    switch (selectedBox) {
      case 1:
        return require("../images/1.jpg");
      case 2:
        return require("../images/2.jpg");
      case 3:
        return require("../images/3.jpg");
      case 4:
        return require("../images/4.jpg");
      case 5:
        return require("../images/4k-Wallpapers-for-pc-3.jpg");
      default:
        return require("../images/4k-Wallpapers-for-Windows-10-9.jpg");
    }
  };
  return (
    <Wrapper>
      <h1 className="main-heading">Changing Background</h1>
      <h3 className="sub-heading">{number}</h3>
      <hr />
      <div className="container">
        <img src={getImgSource()} alt="Loading..." />
        <div className="buttons">
          {Button.map((Bnumber) => (
            <div
              key={Bnumber}
              className={`box &{selectedBox === Bnumber ? "selected":""}`}
              onClick={() => setSelectedBox(Bnumber)}
            >
              {Bnumber}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    width: 100vw;
    height: 85vh;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  img {
    width: 100vw;
    height: 500px;
    position: absolute;
    z-index: -1;
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
  }
  .box {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      font-size: 1.5rem;
    }
  }
`;

export default ChangingBg;

import React, { useState } from "react";
import { styled } from "styled-components";

const Practise = () => {
  const [open, setOpen] = useState(false);

  const handleBoxClick = () => {
    setOpen(!open);
  };
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
      <div className={`box-container ${open ? "open" : ""}`}>
        <div className="box">
          <img src={getImgSource()} className="image" alt="Loading..." />
        </div>
        <div className="cap" onClick={handleBoxClick}></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .box-container {
    height: 200px;
    margin: 0rem 3rem 2rem 3rem;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.open .cap {
      transform: translateY(100px);
    }
  }

  .box {
    width: 100px;
    height: 100px;
    /* border: 3px solid red;/ */
    z-index: -1;
    cursor: pointer;
    position: relative;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Adjust object-fit property based on your requirement */
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .cap {
    width: 100px;
    height: 100px;
    background-color: blue;
    position: absolute;
    z-index: 1;
    transition: all 0.5s;
    cursor: pointer;
  }
`;

export default Practise;

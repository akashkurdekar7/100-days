import React, { useState } from "react";
import { styled } from "styled-components";

const ProductSwipe = () => {
  const [openBox, setOpenBox] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(1);

  const products = {
    1: { name: "nike shoe", price: 7700, location: "usa" },
    2: { name: "puma shoe", price: 8060, location: "india" },
    3: { name: "aircraft shoe", price: 9006, location: "canada" },
  };

  const handleBoxClick = () => {
    setOpenBox(!openBox);
  };

  const handleNavigation = (direction) => {
    const productKeys = Object.keys(products);
    const currentIndex = productKeys.indexOf(selectedProduct.toString());
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % productKeys.length;
    } else if (direction === "prev") {
      newIndex = (currentIndex - 1 + productKeys.length) % productKeys.length;
    }

    setSelectedProduct(parseInt(productKeys[newIndex], 10));
  };

  const getImgSource = (boxNumber) => {
    switch (boxNumber) {
      case 1:
        return require("../images/1.jpg");
      case 2:
        return require("../images/2.jpg");
      case 3:
        return require("../images/3.jpg");
      default:
      // return require("../images/default.jpg");
    }
  };

  const productInfo = products[selectedProduct] || {
    name: "unknown",
    price: 0,
    location: "unknown",
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="mobile">
          <h1 className="sub-heading">Products</h1>

          <div
            className={`box-container ${openBox ? "open" : ""}`}
            onClick={handleBoxClick}
          >
            <div className="box">
              <img
                src={getImgSource(selectedProduct)}
                className="image"
                alt="Loading..."
              />
            </div>
            <div className="cap"></div>
          </div>

          <div className="info-container">
            <button
              className="nav-button"
              onClick={() => handleNavigation("prev")}
            >
              {"<"}
            </button>
            <h3 className="text">Location: {productInfo.location}</h3>
            <h3 className="text">Name: {productInfo.name}</h3>
            <h1 className="text">Price: {productInfo.price}</h1>
            <span className="text">Rating:</span>
            <div className="circle"></div>
            <button
              className="nav-button"
              onClick={() => handleNavigation("next")}
            >
              {">"}
            </button>
          </div>
        </div>

        <div className="copywrite"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgb(238, 253, 130);

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    .mobile {
      width: 50%;
      height: 620px;
      border-radius: 50px;
      margin: 2rem 0;
      border: 10px solid #e6e6e6;
      background-color: white;
    }

    .sub-heading {
      margin: 1rem 0 !important;
      font-size: 1.8rem;
    }

    .box-container {
      height: 200px;
      margin: 0rem 3rem 2rem 3rem;
      border: 3px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      &.open .cap {
        transform: translateY(100px);
      }
    }
    .box {
      width: 100px;
      height: 100px;
      /* border: 3px solid red; */
      z-index: -1;
      cursor: pointer;
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

    .info-container {
      height: 200px;
      margin: 0 2rem;
      position: relative;
    }

    .text {
      text-align: center;
    }

    span {
      color: #c880ff;
      position: absolute;
      bottom: 30px;
    }

    .circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #c880ff;
      margin: 0 auto;
      position: absolute;
      bottom: -53px;
      right: 95px;
    }
  }
  .nav-button {
    font-size: 1.5rem;
    background-color: #c880ff;
    color: white;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export default ProductSwipe;

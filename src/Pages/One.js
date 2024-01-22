import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const one = () => {
  const { number } = useParams();
  return (
    <Wrapper>
      <h1>{number}</h1>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default one;

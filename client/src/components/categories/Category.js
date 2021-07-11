import React from "react";
import styled from "styled-components";
import All from "./All";
import Digital from "./Digital";
import Interior from "./Interior";
import Accessory from "./Accessory";
import Beauty from "./Beauty";
import Clothes from "./Clothes";
import Sports from "./Sports";
import Art from "./Art";
import Thing from "./Thing";
//카테고리 전체 모음

const CategoryBlock = styled.div`
  align-items: center;
  padding-right: 400px;
  padding-left: 400px;
  justify-content: space-around;
  margin: 0 auto;
  display: flex;
`;

const Spacer = styled.div`
  padding-top: 3rem;
`;
const Category = () => {
  return (
    <Spacer>
      <h1>카테고리</h1>
      <CategoryBlock>
        <All />
        <Digital />
        <Interior />
        <Accessory />
        <Beauty />
      </CategoryBlock>
      <CategoryBlock>
        <Clothes />
        <Sports />
        <Art />
        <Thing />
      </CategoryBlock>
    </Spacer>
  );
};

export default Category;

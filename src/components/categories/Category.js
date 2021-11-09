import React from "react";
import styled from "styled-components";

import CategoryBtn from "./CategoryBtn";

import all from "../../lib/all.png";
import electrical_appliances from "../../lib/electrical_appliances.png";
import interior_design from "../../lib/interior_design.png";
import accessory from "../../lib/accessory.png";
import beauty from "../../lib/beauty.png";
import sports from "../../lib/sports.png";
import clothing from "../../lib/clothing.png";
import art_design from "../../lib/art_design.png";
import things from "../../lib/things.png";

//카테고리 전체 모음

const CategoryBlock = styled.div`
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;
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
      <h1>Category</h1>
      <CategoryBlock>
        <CategoryBtn ctg="ALL" name="ALL" img={all} />
        <CategoryBtn ctg="DIG" name="Home Appliances" img={electrical_appliances} />
        <CategoryBtn ctg="FUR" name="Furniture & Interior" img={interior_design} />
        <CategoryBtn ctg="ACC" name="Accessories" img={accessory} />
        <CategoryBtn ctg="BEA" name="Beauties" img={beauty} />
      </CategoryBlock>
      <CategoryBlock>
        <CategoryBtn ctg="CLO" name="Clothes" img={clothing} />
        <CategoryBtn ctg="SPO" name="Leisure & Sports" img={sports} />
        <CategoryBtn ctg="ART" name="Art" img={art_design} />
        <CategoryBtn ctg="LIF" name="Daily Supplies" img={things} />
      </CategoryBlock>
    </Spacer>
  );
};

export default Category;

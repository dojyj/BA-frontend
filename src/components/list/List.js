import React from "react";
import styled from "styled-components";
import art from "../../lib/art.png";
const Positioner = styled.div`
  height: 500px;
  width: 800px;
  position: absolute;
  top: 25%;
  left: 35%;
`;

const Row = styled.div`
  height: 100px;
  width: 800px;
  margin-bottom: 5px;
  display: flex;
`;

const Img = styled.div`
  height: 150px;
  width: 200px;
  border: 1px solid black;
  img {
    height: 140px;
    width: 170px;
  }
`;

const Content = styled.div`
  border: 1px solid black;
  max-height: 150px;
  width: 500px;
  display: inline;
`;

const Price = styled.div`
  border: 1px solid black;
  max-height: 150px;
  width: 150px;
  display: inline;
  justify-content: center;
  align-items: center;
`;

const Date = styled.div`
  border: 1px solid black;
  max-height: 150px;
  max-width: 300px;
  display: inline;
`;

const List = (props) => {
  return (
    <Positioner>
      <Row>
        <img src={art} alt="" />
        <Content>
          <h2>{props.title}</h2>
          <p>{props.info}</p>
          <span>시작일 : {props.startDate}</span>
          <span>종료일 : {props.endDate}</span>
        </Content>

        <Price>
          <p>경매 시작 가격 : {props.startprice}</p>
        </Price>
      </Row>

      <Row>
        <img src={art} alt="" />
        <Content>
          <h2>{props.title}</h2>
          <p>{props.info}</p>
          <span>시작일 : {props.startDate}</span>
          <span>종료일 : {props.endDate}</span>
        </Content>

        <Price>
          <p>경매 시작 가격 : {props.startprice}</p>
        </Price>
      </Row>
    </Positioner>
  );
};

export default List;

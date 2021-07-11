import React from "react";
import styled from "styled-components";
import test from "../../lib/test.png";
import bugs from "../../lib/bugs.png";
import ear from "../../lib/ear.png";
import kit from "../../lib/kit.png";

const Positioner = styled.div`
  height: 500px;
  width: 800px;
  position: absolute;
  top: 25%;
  left: 35%;
`;

const Row = styled.div`
  height: 100px;
  width: 300px;
  margin-bottom: 5px;
  display: flex;
`;

const Img = styled.div`
  height: 150px;
  width: 180px;
  border: 1px solid black;
  img {
    height: 140px;
    width: 170px;
  }
`;

const Content = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 360px;
  display: inline;
  background: red;
`;

const Price = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 100px;
  display: inline;
`;

const Buttons = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 150px;
  display: inline;
`;

const Date = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 300px;
  display: inline;
`;

const JoinedList = (props) => {
  return (
    <Positioner>
      <div>참여한 경매 목록 </div>
      <Row>
        <img src={bugs} alt="" />
        {/* <Content>
          <h2>{props.title}</h2>
          <p>{props.info}</p>
          <span>시작일 : {props.startDate}</span>
          <span>종료일 : {props.endDate}</span>
        </Content>

        <Price>
          <p>경매 시작 가격 : {props.startprice}</p>
        </Price>

        <Buttons>
          <p>경매상태 아이콘 자리 </p>
          <button>수정</button>
          <button>삭제</button>
        </Buttons> */}
      </Row>
      <Row>
        <img src={ear} alt="" />
      </Row>
      <Row>
        <img src={bugs} alt="" />
      </Row>
      <Row>
        <img src={ear} alt="" />
      </Row>
    </Positioner>
  );
};

export default JoinedList;

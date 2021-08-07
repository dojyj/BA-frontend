import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import img_test from "../../lib/img_test.jpg";
import heart from "../../lib/heart.png";
import HeartButton from "../../components/HeartButton";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Contents = styled.div`
  width: 50rem;
  height: auto;
`;

const Img = styled.div`
  width: 290px;
  height: 290px;
  float: left;
  border: 1px solid red;
`;

const Infos = styled.div`
  width: auto;
  height: 300px;
  font-size: 1.1em;
  font-weight: bold;
  float: left;
`;

const Views = styled.div`
  width: 300px;
  height: auto;
  border: 1px solid green;
  float: left;
  span {
    justify-content: space-between;
  }
`;

const Buttons = styled.div`
  width: 400px;
  height: auto;
  float: left;
  button {
    justify-content: space-between;
    height: 30px;
    width: 100px;
    margin-right: 30px;
    font-weight: bold;
    background-color: #e1e0e0;
    border: 1px solid white;
    img {
      height: 15px;
    }
  }
`;

const DetailWrapper = ({ auction_img, auction_infos, like_auction }) => {
  const [like, setLike] = useState(false);

  const toggleLike = async (e) => {
    const res = await axios.post();
    setLike(!like);
  };
  return (
    <Positioner>
      <Contents>
        <Img>
          <img src={img_test} height="280px" alt=""></img>
        </Img>
        <Infos>
          {" "}
          <div>• 카테고리 : </div>
          <div>• 상품명 : </div>
          <br></br>
          <div>• 작품설명: </div>
          <br />
          <span>• 경매시작일 : &nbsp; &nbsp;</span>
          <span>• 경매종료일 : </span>
          <br />
          <br></br>
          <span>• 경매시작가 : &nbsp;</span>
          <span>• 경매종료가 : </span>
          <br></br>
          <br></br>
          <div>• 경매유찰횟수 : 회</div>
        </Infos>
      </Contents>
      <Views>
        <HeartButton like={like}></HeartButton>
        <span>조회수 : 회</span>
      </Views>
      <Buttons>
        <button>찜하기</button>
        <button>경매입장</button>
        <Link to="/send">
          <button>쪽지보내기</button>
        </Link>
      </Buttons>
    </Positioner>
  );
};

export default DetailWrapper;

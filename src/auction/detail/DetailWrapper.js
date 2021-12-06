import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeartButton from "../../components/HeartButton";
import { Link } from "react-router-dom";
import { auctionApi } from "../../api";
import { AuctionListUtils } from "../../pages/categories/ListUtils";
import { useDispatch } from "react-redux";
// import { Button } from "@material-ui/core";
import { openSendMessage } from "../../store/features/inboxSlice";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #f8f9fa;
  transform: translate(-50%, -50%);
  padding: 1rem;
`;
const Contents = styled.div`
  width: 50rem;
  height: auto;
`;

const Img = styled.div`
  width: 290px;
  height: 290px;
  float: left;
`;

const Infos = styled.div`
  width: auto;
  height: 300px;
  font-size: 1.1em;
  font-weight: bold;
  float: left;
`;

const StyledLink = styled(Link)`
  a {
    width: 100px;
    height: auto;
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #aaa;
  padding-top: 1em;
  justify-content: space-between;
  align-items: center;
  flex-basis: 20em;
`;

const DetailWrapper = ({ id }) => {
  // const [like, setLike] = useState(false);
  const [auctionId] = useState(id);
  const [Auction, setAuction] = useState([]);
  const [category, setCategory] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const route_params = auctionId;
    getdata(route_params);
  }, [auctionId]);

  async function getdata(route_params) {
    await auctionApi
      .getAuctiondetail(route_params)
      .then((res) => {
        return res.data.auction;
      })
      .then((data) => {
        console.log(data);
        setAuction(data);
        setCategory(data.category);
        AuctionListUtils.getAuctionImage(data.productImageURL).then((base64) => {
          setImgSrc("data:;base64," + base64);
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Positioner>
      <Contents>
        <Img>
          <img src={imgSrc} height="280px" alt=""></img>
        </Img>
        <Infos>
          {" "}
          <div>• 상품명 : {Auction.title}</div>
          <br />
          <div>• 카테고리 : {category.label}</div>
          <br />
          <div>• 상품 상세: {Auction.content}</div>
          <br />
          <span>• 경매시작일 : {Auction.startDate} &nbsp;&nbsp; </span>
          <span>• 경매종료일 : {Auction.endDate}</span>
          <br />
          <br />
          <span>• 경매시작가 : {Auction.startPrice}</span>
          <br />
          <br />
          <div>• 경매유찰횟수 : {Auction.sellingFailure}회</div>
        </Infos>
      </Contents>
      <Footer>
        <HeartButton></HeartButton>
        <span>조회수 : 회</span>
        <StyledLink to={`/realtimeauction/${auctionId}`}>
          <button>경매 입장</button>
        </StyledLink>
        <StyledLink to="/send">
          <button onClick={() => dispatch(openSendMessage)}>쪽지 보내기</button>
        </StyledLink>
      </Footer>
    </Positioner>
  );
};

export default DetailWrapper;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auctionApi, userApi } from "../../api";
import { AuctionListUtils } from "../../pages/categories/ListUtils";
import AuctionItemInfoPlate from "./AuctionItemInfoPlate";
import AuctionSellerInfoPlate from "./AuctionSellerInfoPlate";
import AuctionStatusBoard from "./AuctionStatusBoard";

const AuctionMain = styled.div`
  width: 70rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 3px solid #eee;
  padding: 1em;
`;

const AuctionName = styled.h1`
  margin: 0 0 1rem 0;
  padding: 1em 0 0 0;
  border-bottom: 2px solid #ddd;
`;

const TimerText = styled.text`
  font-size: 1.5rem;
  color: #aaa;
`;

const AuctionHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 1em;
  border-bottom: 2px solid #ddd;
`;

const AuctionImg = styled.div`
  display: flex;
  width: 25em;
  height: 20em;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

const AuctionInfoPlate = styled.div`
  width: 45em;
  height: 20em;
  display: flex;
  flex-direction: row;
`;

const AuctionBody = styled.div`
  display: flex;
  width: 100%;
  min-height: 365px;
  justify-content: center;
`;

const RealTimeAuction = ({ id }) => {
  const [auctionInfo, setAuction] = useState({});
  const [imgSrc, setImgSrc] = useState("");
  const [sellerInfo, setSellerInfo] = useState({});
  const [progressInfo, setProgressInfo] = useState({});
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const route_params = id;
    getAuctionData(route_params);
  }, []);

  useEffect(() => {
    setTimer("1d 3h 59m");
  }, []);

  async function getAuctionData(route_params) {
    await auctionApi
      .getAuctiondetail(route_params)
      .then((res) => {
        return res.data.auction;
      })
      .then(async (data) => {
        console.log(data);
        setAuction(data);

        await AuctionListUtils.getAuctionImage(data.productImageURL)
          .then((base64) => {
            setImgSrc("data:;base64," + base64);
          })
          .catch((err) => {
            console.log(err);
          });

        await userApi
          .getUserData({ uid: data.sellerId })
          .then((res) => {
            return res.data.user_info;
          })
          .then((data) => {
            setSellerInfo(data);
          })
          .catch((err) => {
            console.log(err);
          });

        await auctionApi
          .getProgress(data.progressInfo)
          .then((res) => {
            return res.data.progressInfo;
          })
          .then((data) => {
            setProgressInfo(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <AuctionMain>
      <AuctionName>
        {sellerInfo.nickName}님의 경매 : <TimerText>종료까지 {timer}</TimerText>
      </AuctionName>
      <AuctionHeader>
        <AuctionImg>
          <img src={imgSrc} height="300px" alt="auctionImg"></img>
        </AuctionImg>
        <AuctionInfoPlate>
          <AuctionItemInfoPlate auction={auctionInfo}></AuctionItemInfoPlate>
          <AuctionSellerInfoPlate seller={sellerInfo}></AuctionSellerInfoPlate>
        </AuctionInfoPlate>
      </AuctionHeader>
      <AuctionBody>
        <AuctionStatusBoard progress={progressInfo}></AuctionStatusBoard>
      </AuctionBody>
    </AuctionMain>
  );
};

export default RealTimeAuction;

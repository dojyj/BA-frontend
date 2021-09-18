import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auctionApi, userApi } from "../../api";
import { AuctionListUtils } from "../../pages/categories/ListUtils";
import AuctionItemInfoPlate from "./AuctionItemInfoPlate";
import AuctionSellerInfoPlate from "./AuctionSellerInfoPlate";

const AuctionMain = styled.div`
  width: 70rem;
  height: 100%;
  background-color: #eee;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const AuctionHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const AuctionImg = styled.div`
  width: 25em;
  height: 20em;
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
`;

const AuctionStatusBoard = styled.div`
  display: flex;
`;

const RealTimeAuction = ({ id }) => {
  const [auctionInfo, setAuction] = useState({});
  const [imgSrc, setImgSrc] = useState("");
  const [sellerInfo, setSellerInfo] = useState({});

  useEffect(() => {
    const route_params = id;
    getAuctionData(route_params);
  }, []);

  async function getAuctionData(route_params) {
    await auctionApi
      .getAuctiondetail(route_params)
      .then((res) => {
        return res.data.auction;
      })
      .then((data) => {
        setAuction(data);
        AuctionListUtils.getAuctionImage(data.productImageURL)
          .then((base64) => {
            setImgSrc("data:;base64," + base64);
          })
          .catch((err) => {
            console.log(err);
          });
        userApi
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
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <AuctionMain>
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
        <AuctionStatusBoard>가격현황판</AuctionStatusBoard>
      </AuctionBody>
    </AuctionMain>
  );
};

export default RealTimeAuction;

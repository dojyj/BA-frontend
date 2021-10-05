import { useEffect, useState } from "react";
import "./realtime.css";
import styled from "styled-components";

const Plate = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid black;
  padding: 1em;
`;

const PlateRow = styled.div`
  display: flex;
  padding: 1em;
  border-bottom: 1px solid black;
`;

const AuctionItemInfoPlate = (auctionInfo) => {
  const [auction, setAuction] = useState(auctionInfo);

  useEffect(() => {
    setAuction(auctionInfo.auction);
    paintPlate(auction);
  }, [auction, auctionInfo]);

  const paintPlate = (auction) => {
    console.log(auction);
    paintDate(auction.startDate, auction.endDate);
  };

  const paintDate = (start, end) => {
    console.log(start);
    console.log(end);

    if (start < end) console.log("zz");
    else {
      console.log("zzz");
    }
  };

  return (
    <Plate>
      <PlateRow id="title">{auction.title}</PlateRow>
      <PlateRow id="content">{auction.content}</PlateRow>
      <PlateRow id="runtime">
        {auction.startDate} ~ {auction.endDate}
      </PlateRow>
      <PlateRow id="selling-failure">유찰 횟수 : {auction.sellingFailure}</PlateRow>
    </Plate>
  );
};

export default AuctionItemInfoPlate;

import { useEffect, useState } from "react";
import "./realtime.css";
import styled from "styled-components";

const Plate = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 2px solid #eee;
  padding: 1em;
  overflow: scroll;
`;

const PlateRow = styled.div`
  display: flex;
  padding: 1em;
  border-bottom: 2px solid #ddd;
`;

const AuctionItemInfoPlate = (auctionInfo) => {
  const [auction, setAuction] = useState(auctionInfo);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setAuction(auctionInfo.auction);
    paintPlate(auction);
  }, [auction, auctionInfo]);

  const paintPlate = (auction) => {
    paintDate(auction.startDate, auction.endDate);
  };

  const paintDate = (start, end) => {
    if (start < end) {
      setStartDate(start);
      setEndDate(end);
    } else console.log("auction date error");
  };

  return (
    <Plate>
      <PlateRow id="title">{auction.title}</PlateRow>
      <PlateRow id="content">{auction.content}</PlateRow>
      <PlateRow id="runtime">
        {startDate} ~ {endDate}
      </PlateRow>
      <PlateRow id="selling-failure">유찰 횟수 : {auction.sellingFailure}</PlateRow>
    </Plate>
  );
};

export default AuctionItemInfoPlate;

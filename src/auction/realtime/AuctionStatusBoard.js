import { useEffect, useState } from "react";
import styled from "styled-components";

const BoardPlate = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ParticipantPlate = styled.div`
  display: flex;
  width: 33%;
  border: 2px solid #ddd;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2em;
`;

const BidPlate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: calc(67% - 2rem);
`;

const PricePlate = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  border-bottom: 2px solid #eee;
  align-items: center;
`;

const BidRequest = styled.input`
  width: 10rem;
  height: 2rem;
  border: 1px solid #aaa;
  border-radius: 6px;
  outline: none;
  padding: 3px 3px 2px 7px;
  box-sizing: border-box;
  transition: 0.3s;
  margin-left: 1em;
  margin-right: 0.5em;
`;

const PriceUnitSpan = styled.span`
  color: #aaa;
`;

const MyWalletPlate = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  border-bottom: 2px solid #eee;
  height: 20rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2em;
`;

const AuctionStatusBoard = (progress) => {
  const [price, setPrice] = useState(0);
  const [priceUnit, setPriceUnit] = useState(0);
  const [progressInfo, setProgressInfo] = useState({});

  useEffect(() => {
    setProgressInfo(progress.progress);
    paintBoard(progressInfo);
  }, [progress, progressInfo]);

  const paintBoard = (info) => {
    setPrice(info.price);
    setPriceUnit(info.priceUnit);
  };

  return (
    <BoardPlate>
      <ParticipantPlate>참여자 목록</ParticipantPlate>
      <BidPlate>
        <PricePlate> 현재 호가 : {price} Won</PricePlate>
        <PricePlate>
          {" "}
          낙찰 요청 : <BidRequest /> <PriceUnitSpan> {price + priceUnit} won 이상 입력</PriceUnitSpan>
        </PricePlate>
        <MyWalletPlate>Metamask Wallet Info</MyWalletPlate>
      </BidPlate>
    </BoardPlate>
  );
};

export default AuctionStatusBoard;

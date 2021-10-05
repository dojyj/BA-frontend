import { useEffect, useState } from "react";
import styled from "styled-components";
import example_image from "../../lib/team.png";
import "./realtime.css";

const Plate = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: scroll;
`;

const ImageRow = styled.div`
  min-width: 200px;
  min-height: 200px;
  background-image: url(${example_image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const PlateRow = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  border-bottom: 1px solid black;
  justify-content: center;
`;

const AuctionSellerInfoPlate = (sellerInfo) => {
  const [seller, setSeller] = useState(sellerInfo);

  useEffect(() => {
    setSeller(sellerInfo.seller);
    console.log(seller);
  }, [seller, sellerInfo]);

  return (
    <Plate>
      <ImageRow id="seller-image" src="../../lib/team.png"></ImageRow>
      <PlateRow>{seller.name}</PlateRow>
      <PlateRow>{seller.nickName}</PlateRow>
      <PlateRow>{seller.email}</PlateRow>
    </Plate>
  );
};

export default AuctionSellerInfoPlate;

import { useState } from "react";

const AuctionSellerInfoPlate = (sellerInfo) => {
  const [seller, setSeller] = useState(sellerInfo);
  console.log(sellerInfo);
  return <div>sellerinfo</div>;
};

export default AuctionSellerInfoPlate;

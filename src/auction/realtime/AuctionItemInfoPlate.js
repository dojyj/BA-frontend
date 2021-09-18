import { useState } from "react";

const AuctionItemInfoPlate = (auctionInfo) => {
  const [auction, setAuction] = useState(auctionInfo);
  console.log(auctionInfo);
  return <div>iteminfo</div>;
};

export default AuctionItemInfoPlate;

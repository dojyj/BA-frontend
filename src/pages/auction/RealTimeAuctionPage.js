import React from "react";
import RealTimeAuction from "../../auction/realtime/realTimeAuction";

function RealTimeAuctionPage(props) {
  const auctionId = props.match.params.auctionId;

  return (
    <div>
      <RealTimeAuction id={auctionId}></RealTimeAuction>
    </div>
  );
}

export default RealTimeAuctionPage;

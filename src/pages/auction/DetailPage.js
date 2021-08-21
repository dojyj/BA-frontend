import DetailPost from "../../auction/detail/DetailPost";
import React from "react";

function DetailPage(props) {
  const auctionId = props.match.params.auctionId;

  return (
    <div>
      <DetailPost id={auctionId}></DetailPost>
    </div>
  );
}

export default DetailPage;

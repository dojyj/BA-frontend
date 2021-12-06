import DetailPost from "../../auction/detail/DetailPost";
import React from "react";
import SendMessage from "../../components/inbox/SendMessage";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "../../store/features/inboxSlice";

function DetailPage(props) {
  const auctionId = props.match.params.auctionId;
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <div>
      <DetailPost id={auctionId}></DetailPost>
      {sendMessageIsOpen && <SendMessage />}
    </div>
  );
}

export default DetailPage;

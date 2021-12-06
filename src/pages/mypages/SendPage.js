import React from "react";
import MessageModal from "../../components/inbox/MessageModal";
// import { ExpandLessSharp } from "@material-ui/icons";
import Chat from "../../components/inbox/MessageSocket";
const SendPage = () => {
  return (
    <div>
      <Chat></Chat>
      <MessageModal></MessageModal>
    </div>
  );
};
export default SendPage;

import React from "react";
import MyPageMenu from "../../components/MyPageMenu";
import { JoinedList } from "../../components/list";

const JoinedPage = () => {
  return (
    <div>
      <MyPageMenu />
      <JoinedList></JoinedList>
    </div>
  );
};

export default JoinedPage;

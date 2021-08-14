import React from "react";
import MyPageMenu from "../../components/MyPageMenu";
import { LikedList } from "../../components/list";

const LikedPage = () => {
  return (
    <div>
      <MyPageMenu />
      <LikedList></LikedList>
    </div>
  );
};

export default LikedPage;

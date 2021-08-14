import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlinePushpin,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineSolution,
} from "react-icons/ai";
import MyPageMenuOption from "./MyPageMenuOption";

const MyPageMenu = () => {
  return (
    <div className="mypageMenu">
      <Link to="/mypage">
        <MyPageMenuOption Icon={AiOutlineMenu} title="마이페이지" />
        <MyPageMenuOption Icon={AiOutlineUser} title="회원정보" />
      </Link>
      <Link to="/inbox">
        <MyPageMenuOption Icon={AiOutlineMail} title="쪽지함" />
      </Link>

      <Link to="/myAuctionList">
        <MyPageMenuOption Icon={AiOutlineSolution} title="내 경매목록" />
      </Link>

      <Link to="/joinedList">
        <MyPageMenuOption Icon={AiOutlinePushpin} title="참여한 경매목록" />
      </Link>

      <Link to="/liked">
        <MyPageMenuOption Icon={AiOutlineHeart} title="찜한 경매목록" />
      </Link>
    </div>
  );
};

export default MyPageMenu;

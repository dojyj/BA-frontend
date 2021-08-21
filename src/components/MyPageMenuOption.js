import React from "react";
import "./MyPageMenuOption.css";

function MyPageMenuOption({ Icon, title }) {
  return (
    <div className="mypageOption">
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}
export default MyPageMenuOption;

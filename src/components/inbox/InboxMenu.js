import React from "react";
import "./InboxMenu.css";

function InboxMenu({ Icon, title, color, selected }) {
  return (
    <div
      className={`inboxMenu ${selected && "inbox__selected"}`}
      style={{
        borderBottom: `1px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <h4>{title}</h4>
    </div>
  );
}

export default InboxMenu;

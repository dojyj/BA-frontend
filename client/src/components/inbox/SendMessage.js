import React, { useState, useEffect } from "react";
import message from "../../lib/message.png";
import "./SendMessage.css";
import styled from "styled-components";
const MessageBlock = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 35%;
  height: 100%;
  transform: translate(-50%, -50%);
`;

const SendMessage = ({ isOpen, close }) => {
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log("렌더링 완료");
    console.log({
      receiver,
      content,
    });
  });
  const onChangeReceiver = (e) => {
    setReceiver(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    setReceiver({ receiver: "" });
    setContent({ content: "" });
    alert("쪽지가 성공적으로 전송되었습니다");
  };
  return (
    <MessageBlock>
      {isOpen ? (
        <div className="modal">
          <div onClick={close}>
            <div className="messageModal">
              <span className="close" onClick={close}>
                &times;
              </span>
              <div className="modalContent" onClick={isOpen}>
                <img className="sendIcon" src={message} alt="" />
                <input
                  name="receiverNickname"
                  className="receiver"
                  type="text"
                  value={receiver}
                  onChange={onChangeReceiver}
                  alt=""
                />
                <input
                  name="messageContent"
                  className="content"
                  type="text"
                  value={content}
                  onChange={onChangeContent}
                  placeholder="보내실 내용을 입력하세요"
                  alt=""
                />
                <button onClick={() => handleClick}>쪽지보내기</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </MessageBlock>
  );
};

export default SendMessage;

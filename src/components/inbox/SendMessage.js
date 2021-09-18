import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import message from "../../lib/message.png";
import "./SendMessage.css";
import styled from "styled-components";
import { loginFunctions } from "../../auth/AuthWatchers";
import { inboxApi } from "../../api";
const MessageBlock = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 35%;
  height: 100%;
  transform: translate(-50%, -50%);
`;

const SendMessage = ({ isOpen, close }) => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log("렌더‰링 완료");
    onFormSubmit();
  });

  const onChangeSender = useCallback((e) => {
    setSender(e.target.value);
  }, []);

  const onChangeReceiver = useCallback((e) => {
    setReceiver(e.target.value);
  }, []);

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onFormSubmit = async (data) => {
    const formData = new FormData();
    const userId = await loginFunctions.getUserInfo().uid;
  
    
    formData.append("sender", sender);
    formData.append("receiver", receiver);
    formData.append("content", content);
    for (let key of formData.entries()) console.log(`쪽지 로그:${key}`);
  };

  const handleClick = (e) => {
    setReceiver({ receiver: "" });
    setContent({ content: "" });
    console.log("dd" + e);
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
                <form onSubmit={onFormSubmit}>
                  <input
                    name="receiverNickname"
                    className="receiver"
                    type="text"
                    value={receiver}
                    onChange={onChangeReceiver}
                    alt=""
                  />
                  <input
                    name="senderNickname"
                    className="sender"
                    type="text"
                    value={sender}
                    onChange={onChangeSender}
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
                  <button type="submit" onClick={() => handleClick}>
                    쪽지보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </MessageBlock>
  );
};

export default SendMessage;

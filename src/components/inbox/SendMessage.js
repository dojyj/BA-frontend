import React from "react";
import { useForm } from "react-hook-form";
// import message from "../../lib/message.png";
import "./SendMessage.css";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../store/features/inboxSlice";
import { firestore } from "../../firebase.utils";
import firebase from "firebase";
const SendMessage = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    console.log("test log 찍히쥬?");
    firestore.collection("inbox").add({
      receiver: formData.receiver,
      sender: formData.sender,
      content: formData.content,
      timestemp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="messageBlock">
      <div className="sendMessage__header">
        <h3>쪽지 보내기</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMessage__close"></CloseIcon>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="receiver" placeholder="수신자" type="text" ref={register({ required: true })} />
        {errors.receiver && <p className="sendMessage__error">수신자를 입력하세요</p>}

        <input name="sender" placeholder="발신자" type="text" ref={register({ required: true })} />

        <input name="content" className="message__content" placeholder="쪽지 내용을 입력하세요" type="text" ref={register({ required: true })} />
        {errors.content && <p className="sendMessage__error">쪽지내용을 입력하세요</p>}
        <div className="sendMessage__options">
          <Button className="sendMessage_send" variant="contained" color="primary" type="submit">
            쪽지 전송
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;

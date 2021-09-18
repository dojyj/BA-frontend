import React, { Component } from "react";
import SendMessage from "./SendMessage";

class MessageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {

    /*jw testing*/
    var ws = new WebSocket("ws://localhost:3333");

    // 연결이 수립되면 서버에 메시지를 전송한다
    ws.onopen = function(event) {
      ws.send("Client message: Hi!");
    }

    this.setState({ isModalOpen: false });
  };
  render() {
    return (
      <>
        <button onClick={this.openModal}>쪽지 보내기 모달</button>
        <SendMessage isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}
export default MessageModal;

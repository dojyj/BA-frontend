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

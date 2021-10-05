import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

//const socket = socketIOClient("localhost:5000");

const Chat = () => {
  
    const myInfo = {
    //roomName: roomName ? roomName : localStorage.getItem("roomName"),
    //userName: userName ? userName : localStorage.getItem("userName"),
    userName: "신지원",
    userId: "1",
    receiverId: "2",
    roomNumber: '1'.concat('_','2') //2는 클릭한 상대방 수 갖고오고 //1은 db에서 자기자신 꺼내오기
  };
  const [currentSocket, setCurrentSocket] = useState();
  function tst(){
      console.log('>?M<')
  }
  useEffect(() => {
    setCurrentSocket(socketIOClient("http://127.0.0.1:5000")); 
    
  
    //socketIOClient.connect("localhost:5000", { transports: ['websocket'] });
   }, []);
   

  const sendMsg = () => {
    if (currentSocket) {     
      console.log('frontend: connected')   
      currentSocket.on("connect", () => { //currentSocket에 서버랑 socket연결됨
        currentSocket.emit("join", myInfo);
      })

      currentSocket.on('onConnect', (msg) => {
        console.log("클라이언트에게 온 메시지", msg)
      });
    }  
  };

    /*
    currentSocket.emit("onSend", {
      userName: '신지원', 
      msg: '보내졌데이',
      timeStamp: new Date().toLocaleTimeString(),
    });
    */


  return <div>
    <button onClick = {sendMsg}>버튼</button>
  </div>
}

export default Chat;

import styled from "styled-components";
// import before_heart from "../../lib/before_heart.png";
// import heart from "../../lib/heart.png";

const AuctionState = styled.div`
  width: 6rem;
  height: 3rem;
  justify-content: center;
  color: white;
  background-color: #3366b0;
  font-weight: bold;
  display: flex;
  margin-right: 1rem;
  align-items: center;
`;

// Auction 약자를 입력받아 한글로 변환, div return
export const AuctionStateConverter = (state) => {
  let currentState;

  if (state === "BEFO") currentState = "시작 전";
  else if (state === "DONE") currentState = "종료";
  else if (state === "FAIL") currentState = "유찰";
  else if (state === "PROC") currentState = "진행 중";

  return <AuctionState>{currentState}</AuctionState>;
};

// 경매 남은 시간 문자열로 리턴
export const RemaininigTimeCalculator = (date) => {
  const end = new Date(Date.parse(date));
  const cur = new Date();
  let days = end.getDate() - cur.getDate();
  let hours = end.getHours() - cur.getHours();
  let minutes = end.getMinutes() - cur.getMinutes();

  if (end < cur) return "";
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }
  if (hours < 0) {
    days -= 1;
    hours += 24;
  }

  if (days < 0) {
    return "";
  }

  return `${days}d ${hours}h ${minutes}m left`;
};

// 경매 찜하기 핸들러 구현 필
// export const DibsHandler = () => {
//   return <Heart src={before_heart}></Heart>;
// };

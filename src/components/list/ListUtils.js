import { useEffect, useState } from "react";
import styled from "styled-components";

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

export const AuctionStateConverter = (state) => {
  let currentState;

  if (state === "BEFO") currentState = "시작 전";
  else if (state === "DONE") currentState = "종료";
  else if (state === "FAIL") currentState = "유찰";
  else if (state === "PROC") currentState = "진행 중";

  console.log(currentState);

  return <AuctionState>{currentState}</AuctionState>;
};

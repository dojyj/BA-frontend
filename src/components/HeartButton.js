import styled from "styled-components";
import before_heart from "../lib/before_heart.png";
import heart from "../lib/heart.png";

const Heart = styled.img`
  height: 25px;
  width: 25px;
`;

const HeartButton = ({ like, onClick }) => {
  return <Heart src={like ? heart : before_heart} onClick={onClick}></Heart>;
};

export default HeartButton;

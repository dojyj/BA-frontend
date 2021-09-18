import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeartButton from "../../components/HeartButton";
import { Link } from "react-router-dom";
import { auctionApi } from "../../api";
import { loginFunctions } from "../../auth/AuthWatchers";
import { AuctionListUtils } from "../../pages/categories/ListUtils";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { openSendMessage } from "../../store/features/inboxSlice";

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Contents = styled.div`
  width: 50rem;
  height: auto;
`;

const Img = styled.div`
  width: 290px;
  height: 290px;
  float: left;
  border: 1px solid red;
`;

const Infos = styled.div`
  width: auto;
  height: 300px;
  font-size: 1.1em;
  font-weight: bold;
  float: left;
`;

const Views = styled.div`
  width: 300px;
  height: auto;
  border: 1px solid green;
  float: left;
  span {
    justify-content: space-between;
  }
`;

const Buttons = styled.div`
  width: 400px;
  height: auto;
  float: left;
  button {
    justify-content: space-between;
    height: 30px;
    width: 100px;
    margin-right: 30px;
    font-weight: bold;
    background-color: #e1e0e0;
    border: 1px solid white;
    img {
      height: 15px;
    }
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  a {
    width: 100px;
  }
`;

const DetailWrapper = ({ id }) => {
  const [like, setLike] = useState(false);
  const [auctionId] = useState(id);
  const [Auction, setAuction] = useState([]);
  const [category, setCategory] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  // const toggleLike = async (e) => {
  //   const res = await axios.post();
  //   setLike(!like);
  // };

  useEffect(() => {
    const route_params = auctionId;
    getdata(route_params);
  }, []);

  async function getdata(route_params) {
    await auctionApi
      .getAuctiondetail(route_params)
      .then((res) => {
        return res.data.auction;
      })
      .then((data) => {
        console.log(data);
        setAuction(data);
        setCategory(data.category);
        AuctionListUtils.getAuctionImage(data.productImageURL).then((base64) => {
          setImgSrc("data:;base64," + base64);
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Positioner>
      <Contents>
        <Img>
          <img src={imgSrc} height="280px" alt=""></img>
        </Img>
        <Infos>
          {" "}
          <div>• 상품명 : {Auction.title}</div>
          <br />
          <div>• 카테고리 : {category.label}</div>
          <br />
          <div>• 작품설명: {Auction.content}</div>
          <br />
          <span>• 경매시작일 : {Auction.startDate} &nbsp;&nbsp; </span>
          <span>• 경매종료일 : {Auction.endDate}</span>
          <br />
          <br />
          <span>• 경매시작가 : {Auction.startPrice}</span>
          <br />
          <br />
          <div>• 경매유찰횟수 : {Auction.sellingFailure}회</div>
        </Infos>
      </Contents>
      <Views>
        <HeartButton like={like}></HeartButton>
        <span>조회수 : 회</span>
      </Views>
      <Buttons>
        <button>찜하기</button>
        {/* <StyledLink to={`/realtimeauction/${auctionId}`}>
          <button>경매입장</button>
        </StyledLink>
        <StyledLink to="/send">
          <button>쪽지보내기</button>
        </StyledLink> */}
        <button>경매입장</button>

        <Button onClick={() => dispatch(openSendMessage)}>쪽지보내기</Button>
      </Buttons>
    </Positioner>
  );
};

export default DetailWrapper;

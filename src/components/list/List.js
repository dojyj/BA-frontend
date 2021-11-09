import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuctionListUtils } from "../../pages/categories/ListUtils";
import { AuctionStateConverter } from "./ListUtils";

const Row = styled(Link)`
  height: 200px;
  width: 800px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
`;

const ImgBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: #eee;
  display: flex;
`;
const Img = styled.img`
  height: 200px;
  width: 200px;
  padding: 1em;
  object-fit: scale-down;
  &:focus {
    outline: 0;
  }
`;

const Content = styled.div`
  max-height: 200px;
  width: 500px;
  display: flex;
  background-color: #eee;
  flex-direction: column;
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListRow = (props) => {
  const [item, setItem] = useState({});
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    setItem(props.item);
    AuctionListUtils.getAuctionImage(props.item.img).then((base64) => {
      setImgSrc("data:;base64," + base64);
    });
  }, [props]);

  console.log(item);
  return (
    <Row to={`/auction/${item._id}`}>
      <ImgBox>
        <Img src={imgSrc} alt="" />
      </ImgBox>
      <Content>
        <ContentTitle>
          <h2>{item.title}</h2>
          {AuctionStateConverter(item.state)}
        </ContentTitle>
        <div>시작일 : {item.startDate}</div>
        <div>종료일 : {item.endDate}</div>
        <div>경매 시작가 : {item.startPrice}</div>
        <div>조회수 : {item.startPrice}</div>
        <div>좋아요 버튼 : {item.startPrice}</div>
      </Content>
    </Row>
  );
};

export default ListRow;

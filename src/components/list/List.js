import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuctionListUtils } from "../../pages/categories/ListUtils";
import { AuctionStateConverter, RemaininigTimeCalculator } from "./ListUtils";
import before_heart from "../../lib/before_heart.png";
import void_img from "../../lib/team2.png";

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
  background-color: #f8f9fa;
  display: flex;
`;
const Img = styled.img`
  height: 200px;
  width: 200px;
  padding: 1em;
  border-radius: 30%;
  object-fit: scale-down;
  &:focus {
    outline: 0;
  }
`;

const Content = styled.div`
  max-height: 200px;
  width: 600px;
  display: flex;
  background-color: #f8f9fa;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const ContentBody = styled.div`
  font-size: 1.5em;
  color: blue;
`;

const ContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
  justify-content: space-between;
  padding-right: 1em;
  color: #ff8a3d;
`;

const Heart = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const HeartNum = styled.div`
  font-size: 1.5rem;
  margin-right: 1em;
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
        {imgSrc && <Img src={imgSrc} alt="" />}
        {!imgSrc && <Img src={void_img} />}
      </ImgBox>

      <Content>
        <ContentTitle>
          <h2>{item.title}</h2>
          <TitleRight>
            <Heart src={before_heart}></Heart>
            <HeartNum>{item.wish}</HeartNum>
            {AuctionStateConverter(item.state)}
          </TitleRight>
        </ContentTitle>
        <ContentBody>₩ {item.startPrice} ~</ContentBody>
        <ContentFooter>
          <div>{item.view} Views</div>
          {new Date() < Date.parse(item.endDate) && <div>종료까지 : {RemaininigTimeCalculator(item.endDate)}</div>}
        </ContentFooter>
      </Content>
    </Row>
  );
};

export default ListRow;

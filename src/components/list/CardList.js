import React from "react";
import styled from "styled-components";
import art from "../../lib/art.png";

const Positioner = styled.div`
  position: absolute;
  top: 47%;
  left: 55%;
  transform: translate(-50%, -50%);
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 900px;
  height: 500px;
`;

const Card = styled.div`
  border-radius: 5px;
  height: 250px;
  width: 200px;
  margin-bottom: 10px;
`;

const Img = styled.div`
  height: 160px;
  width: 200px;
  border: 1px solid black;
  img {
    height: 150px;
    width: 180px;
  }
`;

const Title = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

const AuctionPrice = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

const StartDate = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

const Button = styled.div`
  display: inline;
  transition: 0.5s ease;
  border: 1px solid black;
  background: transparent;
  color: pink;
  width: 40px;
  height: 30px;
  margin-top: 2px;
`;

const CardList = () => {
  return (
    <Positioner>
      <div>찜한 경매 목록 </div>
      <ItemList>
        <Card>
          <Img>
            <img src={art} alt="" />
          </Img>
          <Title>화제의 작품</Title>
          <AuctionPrice>시작가: 10000원</AuctionPrice>
          <StartDate>경매시작일:2021.3.27</StartDate>
          <div className="btnbox">
            <Button>
              <button>임시버튼</button>
              <button>좋아요</button>
            </Button>
          </div>
        </Card>
        <Card>
          <Img>
            {" "}
            <img src={art} alt="" />
          </Img>
          <Title>화제의 작품</Title>
          <AuctionPrice>시작가: 10000원</AuctionPrice>
          <StartDate>경매시작일:2021.3.27</StartDate>
        </Card>
        <Card>
          <Img>
            {" "}
            <img src={art} alt="" />
          </Img>
          <Title>화제의 작품</Title>
          <AuctionPrice>시작가: 10000원</AuctionPrice>
          <StartDate>경매시작일:2021.3.27</StartDate>
        </Card>
        <Card>
          <Img>
            {" "}
            <img src={art} alt="" />
          </Img>
          <Title>화제의 작품</Title>
          <AuctionPrice>시작가: 10000원</AuctionPrice>
          <StartDate>경매시작일:2021.3.27</StartDate>
          <Button>
            <button>임시버튼</button>
            <button>좋아요</button>
          </Button>
        </Card>
        <Card />
        <Card />
        <Card />
        <Card />
      </ItemList>
    </Positioner>
  );
};

export default CardList;

import React from "react";
import test1 from "../../lib/test1.png";
import test2 from "../../lib/test2.png";
import real1 from "../../lib/real1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  right: 50%;
  width: 60%;
  height: 100%;
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
  height: 250px;
  width: 200px;
  img {
    height: 240px;
    width: 200px;
  }
`;

const ArtofList = () => {
  return (
    <Positioner>
      <h2>예술 작품 리스트</h2>
      <ItemList>
        <Link to="/detail/art">
          <Card>
            <img src={real1} height="250px" width="200px" alt="" />
          </Card>
        </Link>
        <Card>
          <img src={test2} height="250px" width="200px" alt="" />
        </Card>
        <Card>
          <img src={test1} height="250px" width="200px" alt="" />
        </Card>
        <Card>
          <img src={test2} height="250px" width="200px" alt="" />
        </Card>

        <Card>
          <img src={test1} height="250px" width="200px" alt="" />
        </Card>
        <Card>
          <img src={test2} height="250px" width="200px" alt="" />
        </Card>
        <Card>
          <img src={test1} height="250px" width="200px" alt="" />
        </Card>
        <Card>
          <img src={test2} height="250px" width="200px" alt="" />
        </Card>
      </ItemList>
    </Positioner>
  );
};

export default ArtofList;

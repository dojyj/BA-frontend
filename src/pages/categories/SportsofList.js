import React, { useEffect, useState } from "react";
import { auctionApi } from "../../api";
import List from "../../components/list/List";
import { AuctionListUtils } from "./ListUtils";

const SportsofList = () => {
  const [Products, setProducts] = useState([]);
  const [Point, setPoint] = useState(1);
  useEffect(() => {
    const body = {
      skip: Point,
      category: "SPO",
    };
    getProduct(body);
  }, []);

  async function getProduct(params) {
    AuctionListUtils.getProducts(params).then((data) => {
      console.log(data);
      setProducts(data);
      setPoint(Point + 1);
    });
  }

  const renderLists = Products.map((product, index) => {
    return (
      <a href={`/auction/${product._id}`}>
        <List title={product.title} info={product.info} startDate={product.startDate} endDate={product.endDate} startprice={product.startPrice} key={index}></List>
      </a>
    );
  });

  const loadmoreHandler = () => {
    let body = {
      skip: Point,
      cate: "SPO",
    };
    getProduct(body);
  };

  return (
    <div>
      <h1>카테고리 스포츠 레저 리스트 화면</h1>
      {renderLists}
      <button onClick={loadmoreHandler}>더보기</button>
    </div>
  );
};

export default SportsofList;

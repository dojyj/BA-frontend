import ListRow from "../../components/list/List";
import { useEffect, useState } from "react";
import { auctionApi } from "../../api";
import "./category.css";

export const AuctionListUtils = {
  getAuctionImage: async (imageArray) => {
    if (imageArray.length > 1) console.log("Currently, We supporting only one image view.. except first image, they gone America");
    return auctionApi
      .getImage(imageArray[0].filename)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const base64 = btoa(new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ""));
        return base64;
      });
  },
  getProducts: async (params) => {
    return auctionApi.getAuctionListFromCategory(params).then((res) => {
      return res.data.auctionList;
    });
  },
};

// ctg : category
export const Lists = ({ match, location }) => {
  const [Products, setProducts] = useState([]);
  const [Point, setPoint] = useState(1);

  // Point, Category 바뀔 때 마다 Re-Rendering
  useEffect(() => {
    const body = {
      skip: Point,
      category: match.params.ctg,
    };
    getProduct(body);
  }, [Point, match]);

  // 카테고리에 해당 하는 경매 Array Set
  async function getProduct(params) {
    AuctionListUtils.getProducts(params).then((data) => {
      setProducts(data);
    });
  }

  // Product Mapping
  const renderLists = Products.map((item) => {
    return (
      <>
        <ListRow key={item} item={item}></ListRow>
      </>
    );
  });

  return (
    <div className="listing-div">
      <div className="list-header-div">
        <h1>{location.state.name}</h1>
      </div>
      {Products.length > 0 && renderLists}
      <button onClick={() => setPoint(Point + 1)}>더보기</button>
    </div>
  );
};

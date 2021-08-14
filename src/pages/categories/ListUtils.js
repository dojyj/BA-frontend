import { auctionApi } from "../../api";

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

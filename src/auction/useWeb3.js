import Web3 from "web3";

export const loadETH = () => {
  return window.ethereum;
};

export const loadWeb3 = () => {
  const ethereum = loadETH();
  var web3 = window.web3;

  if (ethereum) {
    web3 = new Web3(ethereum);
    ethereum.enable().catch((e) => {
      console.log(e);
    });
  } else if (web3) {
    web3 = new Web3(web3.currentProvider);
  } else {
    console.log("no metamask now");
  }
  return web3;
};

import moment from "moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { auctionApi, userApi } from "../../api";
import { loginFunctions } from "../../auth/AuthWatchers";
import { loadETH, loadWeb3 } from "../useWeb3";

const BoardPlate = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const RequestListPlate = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 2px solid #ddd;
  margin: 1rem;
`;

const RequestListBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const BidPlate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: calc(67% - 2rem);
`;

const PricePlate = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  border-bottom: 2px solid #eee;
  align-items: center;
  justify-content: space-between;
`;

const BidRequest = styled.input`
  width: 10rem;
  height: 2rem;
  border: 1px solid #aaa;
  border-radius: 6px;
  outline: none;
  padding: 3px 3px 2px 7px;
  box-sizing: border-box;
  transition: 0.3s;
  margin-left: 1em;
  margin-right: 0.5em;
`;

const PriceUnitSpan = styled.span`
  color: #aaa;
`;

const MyWalletPlate = styled.div`
  display: flex;
  flex-direction: column;
  height: 18rem;
  width: 100%;
`;

const AuctionStatusBoard = (progress) => {
  const [price, setPrice] = useState(0);
  const [priceUnit, setPriceUnit] = useState(0);
  const [progressInfo, setProgressInfo] = useState({});
  const [walletInfo, setWalletInfo] = useState({});
  const ethereum = loadETH();
  const web3 = loadWeb3();
  const ethValue = 5000000;
  const [won2Eth, setWon2Eth] = useState(``);
  const [requsetList, setRequsetList] = useState([]);

  useEffect(() => {
    setProgressInfo(progress.progress);
    paintBoard(progressInfo);
  }, [progress, progressInfo]);

  const paintBoard = async (info) => {
    setPrice(info.price);
    setPriceUnit(info.priceUnit);
    await setWallet(ethereum, web3);
    updateBoard();
  };

  const setWallet = async (e, w) => {
    let walletInstance = {};
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);

    walletInstance["ChainId"] = e.chainId;
    walletInstance["Account"] = accounts[0];
    walletInstance["Balance"] = w.utils.fromWei(balance);

    setWalletInfo(walletInstance);
  };

  const RequestBid = async () => {
    const value = document.getElementById("bid-value").value / ethValue;

    try {
      if (value > walletInfo.Balance) alert(`낙찰 요청이 소유한 금액보다 큽니다`);
      else {
        const body = {};
        body["Price"] = value;
        body["UID"] = loginFunctions.getUserInfo().uid;
        body["Date"] = moment(new Date()).format();

        await auctionApi.patchProgress(progress.pid, body);
      }
    } catch {
      alert("request failed!");
    } finally {
      // statusboard update
      updateBoard();
    }
  };

  const updateBoard = async () => {
    const updatedProgressInfo = await (await auctionApi.getProgress(progress.pid)).data.progressInfo;
    const requestList = updatedProgressInfo.requestList;

    for (let idx in requestList) {
      requestList[idx].UID = await (await userApi.getUserData({ uid: requestList[idx].UID })).data.user_info.nickName;
    }

    setRequsetList(requestList);
    setPrice(updatedProgressInfo.price);
    setPriceUnit(updatedProgressInfo.priceUnit);
  };

  return (
    <BoardPlate>
      <RequestListPlate id="request-list-plate">
        <div class="request-list-header" id="request-list-header">
          AUCTION TIMELINE
        </div>
        <RequestListBody id="request-list-body">
          {requsetList.map((item) => (
            <div className="request-row">
              <div className="request-date">{item.Date}</div>
              <div className="request-user">{item.UID}</div>
              <div className="request-price">{`${item.Price} eth`}</div>
            </div>
          ))}
        </RequestListBody>
      </RequestListPlate>
      <BidPlate>
        <PricePlate> 현재 호가 : {price} Won</PricePlate>
        <PricePlate>
          <div>
            낙찰 요청 : <BidRequest id="bid-value" onChange={(e) => setWon2Eth(`${e.target.value / ethValue} eth`)} />
            <PriceUnitSpan>{won2Eth || `${price + priceUnit} won 이상 입력`}</PriceUnitSpan>
          </div>
          <div>
            <button onClick={RequestBid}>요청</button>
          </div>
        </PricePlate>
        <MyWalletPlate>
          <PricePlate>
            <h2>My Wallet Info</h2>
          </PricePlate>
          <PricePlate>Wallet Address : {walletInfo.Account}</PricePlate>
          <PricePlate>Network Chain Id : {walletInfo.ChainId}</PricePlate>
          <PricePlate>Balance : {walletInfo.Balance}</PricePlate>
        </MyWalletPlate>
      </BidPlate>
    </BoardPlate>
  );
};

export default AuctionStatusBoard;

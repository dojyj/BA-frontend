import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./components/Header";
import Home from "./pages/mainpages/Home";
import LoginPage from "./pages/mainpages/LoginPage";
import SignUpPage from "./pages/mainpages/SignUpPage";
import LikedPage from "./pages/mypages/LikedPage";
import InboxPage from "./pages/mypages/InboxPage";
import MyPage from "./pages/mypages/MyPage";
import PostPage from "./pages/auction/PostPage";
import InboxView from "./components/inbox/InboxView";
import SendPage from "./pages/mypages/SendPage";
import SenderInboxList from "./components/inbox/SenderInboxList";
import SenderInboxView from "./components/inbox/SenderInboxView";
import JoinedPage from "./pages/mypages/JoinedPage";
import MyAuctionList from "./pages/mypages/MyAuctionList";
import DetailPage from "./pages/auction/DetailPage";
import RealTimeAuctionPage from "./pages/auction/RealTimeAuctionPage";
// import { useSelector } from "react-redux";
// import { selectUser } from "./store/features/userSlice";
// import { selectSendMessageIsOpen } from "./store/features/inboxSlice";
import { Lists } from "./pages/categories/ListUtils";

const App = ({ location }) => {
  const exclusionArray = ["/signup"];
  // const user = useSelector(selectUser);
  // const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <>
      {exclusionArray.indexOf(location.pathname) < 0 && <Header />}
      <main>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={LoginPage} />
          <Route path="/liked" component={LikedPage} />
          <Route path="/myAuctionList" component={MyAuctionList} />
          <Route path="/joinedlist" component={JoinedPage} />
          <Route exact path="/inboxview/:num" component={InboxView} />
          <Route exact path="/senderInboxview/:num" component={SenderInboxView} />
          <Route exact path="/sentinbox" component={SenderInboxList} />
          <Route exact path="/send" component={SendPage} />
          <Route exact path="/inbox" component={InboxPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/category/:ctg" component={Lists} />
          <Route path="/postAuction" component={PostPage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/auction/:auctionId" component={DetailPage} />
          <Route path="/realtimeauction/:auctionId" component={RealTimeAuctionPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </>
  );
};

export default withRouter(App);

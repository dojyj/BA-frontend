import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import { inboxdata } from "../../lib/api/TestData";
import MyPageMenu from "../MyPageMenu";
import InboxMenu from "./InboxMenu";
import { BsInbox, BsInboxFill } from "react-icons/bs";
import { firestore } from "../../firebase.utils";
import "./InboxList.css";
const InboxList = (props) => {
  const [dataList, setDataList] = useState([]);
  const [inbox, setInbox] = useState([]);
  useEffect(() => {
    setDataList(inboxdata);
  }, []);

  useEffect(() => {
    firestore
      .collection("inbox")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setInbox(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });

  return (
    <>
      <MyPageMenu />
      <div className="inboxBlock">
        <div className="inboxMenu_section">
          <Link to="inbox">
            <InboxMenu
              Icon={BsInboxFill}
              title="받은 쪽지함"
              color="red"
              selected
            />
          </Link>
          <Link to="/sentinbox">
            <InboxMenu
              Icon={BsInbox}
              title="보낸 쪽지함"
              color="blue"
              selected
            />
          </Link>
        </div>
        <CommonTable
          headersName={["번호", "받는사람", "내용", "날짜", "읽음확인"]}
        >
          {dataList
            ? dataList.map((item, index) => {
                return (
                  <CommonTableRow key={index}>
                    <CommonTableColumn>{item.num}</CommonTableColumn>
                    <CommonTableColumn>{item.sender}</CommonTableColumn>
                    <CommonTableColumn>
                      <Link to={`/inboxview/${item.num}`}>{item.content}</Link>
                    </CommonTableColumn>
                    <CommonTableColumn>{item.date}</CommonTableColumn>
                    <CommonTableColumn>{item.read}</CommonTableColumn>
                  </CommonTableRow>
                );
              })
            : ""}
        </CommonTable>
      </div>
    </>
  );
};
export default InboxList;

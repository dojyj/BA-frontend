import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import { senderdata } from "../../lib/api/Senderdata";
import InboxMenu from "./InboxMenu";
import MyPageMenu from "../MyPageMenu";
import { BsInbox, BsInboxFill } from "react-icons/bs";

import "./InboxList.css";

const SenderInboxList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(senderdata);
  }, []);
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
export default SenderInboxList;

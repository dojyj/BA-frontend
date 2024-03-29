import React, { useEffect, useState, useReducer } from "react";
import MyPageMenu from "../../components/MyPageMenu";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase.utils";
import { userApi } from "../../api";
import { loginFunctions } from "../../auth/AuthWatchers";
import { MyPageWrapper, InputWithLabel, AuthContent } from "../../auth";
import { AiOutlineSolution } from "react-icons/ai";
import { Button } from "@material-ui/core";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
    [action.email]: action.value,
    [action.account]: action.value,
    [action.nickName]: action.value,
    [action.phoneNumber]: action.value,
    [action.address]: action.value,
  };
}
const MyPage = () => {
  const history = useHistory();
  const [profile, setprofile] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    account: "",
    nickName: "",
    phoneNumber: "",
    address: "",
  });
  const onChange = (e) => {
    dispatch(e.target);
    console.log(state);
  };

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;
    await userApi
      .getUserData({ uid: userInfo.uid })
      .then((res) => {
        return res.data.user_info;
      })
      .then((data) => {
        console.log(data);
        setprofile(data);
      })
      .catch((err) => console.log(err));
  }
  // const UserInfo = (userInfo) => {
  //   firestore
  //     .collection("users")
  //     .doc(userInfo.uid)
  //     .collection("users")
  //     .add({
  //       name: userInfo.name,
  //       nickName: userInfo.nickName,
  //       phoneNumber: userInfo.phoneNumber,
  //       email: userInfo.email,
  //       address: userInfo.address,
  //       account: userInfo.account,
  //       isDone: false,
  //     })
  //     .then((docRef) => {
  //       docRef.update({
  //         profileID: docRef.id,
  //       });
  //     });
  //   setprofile("");
  // };
  return (
    <div>
      <MyPageMenu />

      <Button
        className="mypageOption"
        startIcon={<AiOutlineSolution />}
        onClick={() => {
          auth
            .signOut()
            .then(() => {
              loginFunctions.onLogout();
              console.log(`logout`);
              history.push("/");
            })
            .catch((err) => {
              console.log(`logout error : ${err}`);
            });
        }}
      >
        로그아웃
      </Button>

      <MyPageWrapper>
        <AuthContent title="회원 기본 정보 기입">
          <InputWithLabel label="이름" name="name">
            <input name="name" value={profile.name} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="이메일" name="email">
            <input name="email" value={profile.email} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="가상계좌주소" name="account">
            <input name="account" value={profile.accountNumber} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="별명" name="nickName">
            <input name="nickName" value={profile.nickName} onChange={onChange} />
          </InputWithLabel>
          <button>중복검사</button>
          <InputWithLabel label="연락처" name="phoneNumber">
            <input name="phoneNumber" value={profile.phoneNumber} onChange={onChange} />
          </InputWithLabel>
          <InputWithLabel label="주소" name="Address">
            <input name="address" value={profile.address} onChange={onChange} />
          </InputWithLabel>
          <button className="authButton" type="submit">
            수정완료
          </button>
        </AuthContent>
      </MyPageWrapper>
    </div>
  );
};

export default MyPage;

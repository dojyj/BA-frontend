import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { loginFunctions } from "../auth/AuthWatchers";


const Plus = styled.div`
  justify-content: space-around;
  display: flex;
  position: sticky;

`;

const Spacer = styled.div`
  padding-top: 3rem;
  padding-left: 60rem;
  padding-bottom: 3rem;
`

const PlusButton = ({ location }) => {
  const [isLogin, setIsLogin] = useState();
  useEffect(() => {
    if (location.pathname === "/") {
      const userInfo = loginFunctions.getUserInfo();
      if (!userInfo) {
        setIsLogin(false);
        return;
      }
      setIsLogin(true);
    }
  }, [location.pathname]);

  return (
    <Spacer>
      <Plus>
        {isLogin ? (
          <Link to="/postAuction">
            <BsPlusCircleFill size="50" />
          </Link>
        ) : (
          <Link to="/login">
            <BsPlusCircleFill size="50" />
          </Link>
        )}
      </Plus>
    </Spacer>
  );
};
export default withRouter(PlusButton);

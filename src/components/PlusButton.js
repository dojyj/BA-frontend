import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { loginFunctions } from "../auth/AuthWatchers";
import { Button } from "@material-ui/core";

const Plus = styled.div`
  justify-content: space-around;
  display: flex;
  position: sticky;
  margin-top: 15px !important;
  margin-left: 10px !important;
  width: 150px;
  border: 1px solid silver;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);

  &:hover {
    background: lightgray;
  }
`;

const Spacer = styled.div`
  padding-top: 3rem;
  padding-left: 60rem;
  padding-bottom: 3rem;
`;

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
            <Button startIcon={<BsPlusCircleFill fontSize="large" />}>
              경매등록
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button startIcon={<BsPlusCircleFill fontSize="large" />}>
              경매등록
            </Button>
          </Link>
        )}
      </Plus>
    </Spacer>
  );
};
export default withRouter(PlusButton);

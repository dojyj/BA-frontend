import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
//반응형 디자인, 창 크기에 따라 달라지는 사이즈들
const ResponstiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768) {
    width: 100%auto;
  }
`;

const Responsive = ({ children, ...rest }) => {
  const inDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1124 });
  const isTabletOrMobile = useMediaQuery({ minDeviceWidth: 1824 });
  return <ResponstiveBlock {...rest}>{children}</ResponstiveBlock>;
};

export default Responsive;

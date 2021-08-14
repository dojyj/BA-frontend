import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const Input = styled.div`
  width: 100%;
  border: 1px solid grey;
  outline: none;
  border-radius: 0px;
  line-height: 1.9rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow: hidden;
  input {
    width: 100%;
    outline: none;
    line-height: 1rem;
    border: none;
    font-size: 1.2rem;
    transition: background-color 9999s ease-out;
  }
`;

const InputWithLabel = ({ label, ...rest }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...rest}></Input>
  </Wrapper>
);

export default InputWithLabel;

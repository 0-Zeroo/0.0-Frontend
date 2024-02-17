import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <>
      <Box>
        <BorrowNum>1</BorrowNum>
        <Borrow>
          대여일
          <Date>2023.09.15</Date>
        </Borrow>
        <Return>
          반납일
          <Date>2023.09.22</Date>
        </Return>
        <Circle />
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 300px;
  height: 72px;
  border-radius: 11px;
  background-color: #1b1b1b;
`;

const BorrowNum = styled.div`
  position: relative;
  top: 20px;
  left: 30px;
  color: #8ce33e;
  font-size: 26px;
  font-weight: 600;
`;

const Borrow = styled.div`
  position: relative;
  left: 70px;
  bottom: 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

const Return = styled.div`
  position: relative;
  left: 70px;
  bottom: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

const Date = styled.span`
  padding-left: 70px;
`;

const Circle = styled.div`
  position: relative;
  left: 255px;
  bottom: 34px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #19e76c;
`;

export default index;

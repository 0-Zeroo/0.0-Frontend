import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <>
      <Box>
        <BorrowNum>1</BorrowNum>
        <Text>
          대여일
          <Date>2023.09.15</Date>
        </Text>
        <Circle />
      </Box>
      <Message>대출 기한이 지났습니다. 빠르게 반납해주세요.</Message>
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

const Text = styled.div`
  position: relative;
  left: 70px;
  bottom: 3px;
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
  bottom: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f86464;
`;

const Message = styled.div`
  position: absolute;
  top: 90px;
  left: 50px;
  color: #6a6a6a;
  font-size: 12px;
  font-weight: 400;
`;
export default index;

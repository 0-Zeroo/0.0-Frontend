import { styled } from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
`;

export const Stroke = styled.div`
  position: absolute;
  top: 230px;
  left: 50%;
  width: 1px;
  height: 470px;
  background-color: #393939;
`;

export const Info = styled.div`
  position: absolute;
  top: 128px;
  left: 300px;
  color: var(--White, #fff);
  font-size: 18px;
  font-weight: 400;
`;

export const Name = styled.div`
  position: relative;
  top: 10px;
  font-size: 24px;
`;

export const Times = styled.div`
  position: absolute;
  top: 130px;
  left: 820px;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
`;

export const Num = styled.span`
  position: relative;
  top: 5px;
  left: 10px;
  color: #fbc22b;
  font-size: 36px;
  font-weight: 600;
`;

export const State = styled.div`
  display: flex;
  position: absolute;
  top: 144px;
  left: 1050px;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
`;
export const Circle = styled.div`
  position: relative;
  top: 5px;
  left: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fbc22b;
`;

export const Box = styled.div`
  position: absolute;
  top: 230px;
  left: 375px;
  width: 300px;
  height: 72px;
  border-radius: 11px;
  background-color: #1b1b1b;
`;

export const BorrowNum = styled.span`
  position: relative;
  top: 20px;
  left: 30px;
  color: #8ce33e;
  font-size: 26px;
  font-weight: 600;
`;

export const BorrowDate = styled.span`
  position: relative;
  top: 1px;
  left: 50px;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

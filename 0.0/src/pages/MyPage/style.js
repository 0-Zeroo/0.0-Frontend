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
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 369px;
  padding-top: 230px;
`;

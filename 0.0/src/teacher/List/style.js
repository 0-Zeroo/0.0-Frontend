import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a0a0a;
`;

export const MainText = styled.span`
  position: absolute;
  top: 128px;
  left: 294px;
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleCircle = styled.div`
  position: absolute;
  top: 285px;
  left: 517px;
  width: 28px;
  height: 28px;
  background-color: #fbc22b;
  border-radius: 50%;
  z-index: 10;
`;

export const TitleText = styled.div`
  color: var(--White, #fff);
  font-size: 24px;
  font-weight: 600;
`;

export const TitleUmbrellaNum = styled.div`
  position: absolute;
  top: 200px;
  left: 470px;
`;

export const TitleStudent = styled.div`
  position: absolute;
  top: 200px;
  left: 1015px;
`;

export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding-top: 362px;
  padding-left: 522px;
`;
export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fbc22b;
  z-index: 10;
`;

export const Stroke = styled.div`
  position: absolute;
  top: 295px;
  left: 531px;
  width: 1px;
  height: 350px;
  background-color: #393939;
  z-index: 1;
`;

export const Text = styled.div`
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const UmbrellaNum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: absolute;
  top: 288px;
  left: 570px;
`;

export const StudentContainer = styled.div`
  position: relative;
  bottom: 1000px;
  color: white;
`;

export const Student = styled.div``;

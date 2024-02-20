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
  top: 295px;
  left: 577px;
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
  top: 210px;
  left: 530px;
`;

export const TitleStudent = styled.div`
  position: absolute;
  top: 210px;
  left: 840px;
`;

export const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  padding-top: 372px;
  padding-left: 583px;
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
  top: 305px;
  left: 591px;
  width: 1px;
  height: 350px;
  background-color: #393939;
  z-index: 1;
`;

export const Text = styled.div`
  color: var(--White, #fff);
  font-size: 18px;
  font-weight: 600;
`;

export const UmbrellaNum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: absolute;
  top: 298px;
  left: 630px;
`;

export const StudentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: absolute;
  top: 298px;
  left: 855px;
`;

export const Student = styled.div``;

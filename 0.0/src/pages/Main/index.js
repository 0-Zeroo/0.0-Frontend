import React from "react";
import * as S from "../../styles/theme";
import * as M from "./style";

const index = () => {
  return (
    <>
      <S.Background>
        <M.ReaminText>남은 우산</M.ReaminText>
        <M.Num>5</M.Num>
        <M.TitleCircle />
        <M.TitleText>
          <M.UmbrellaNum>Number 우산 번호</M.UmbrellaNum>
          <M.State>State 상태</M.State>
          <M.Schedule>Schedule 반납 예정일</M.Schedule>
        </M.TitleText>
        <M.Stroke />
        <M.Circle />
      </S.Background>
    </>
  );
};

export default index;

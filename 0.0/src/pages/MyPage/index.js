import React from "react";
import * as S from "./style";

const index = () => {
  return (
    <>
      <S.Background />
      <S.Stroke />
      <S.Info>
        1학년 2반 12번 신희성
        <br />
        <S.Name>기숙사 침대러</S.Name>
      </S.Info>
      <S.Times>
        우산 대여 횟수
        <S.Num>5</S.Num>
      </S.Times>
      <S.State>
        현재 우산 대여
        <S.Circle />
      </S.State>
      <S.Box>
        <S.BorrowNum>1</S.BorrowNum>
        <S.BorrowDate>대여일</S.BorrowDate>
      </S.Box>
    </>
  );
};

export default index;

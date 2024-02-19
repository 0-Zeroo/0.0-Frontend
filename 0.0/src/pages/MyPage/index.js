import React from "react";
import * as S from "./style";
import DateBox from "./DateBox/index";
import Borrow from "./Borrow/index";

const index = () => {
  return (
    <>
      <S.Background>
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
          <DateBox /> <DateBox /> <DateBox /> <DateBox /> <DateBox />
        </S.Box>
        <S.Borrow>
          <Borrow />
        </S.Borrow>
      </S.Background>
    </>
  );
};

export default index;

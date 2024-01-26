import React from "react";
import * as S from "../../styles/theme";
import * as M from "./style";

const index = () => {
  return (
    <>
      <S.Background>
        <M.Text>남은 우산</M.Text>
        <M.Num>5</M.Num>
        <UmbrellaNum>Number 우산 번호</UmbrellaNum>
        <M.TitleCircle />
      </S.Background>
    </>
  );
};

export default index;

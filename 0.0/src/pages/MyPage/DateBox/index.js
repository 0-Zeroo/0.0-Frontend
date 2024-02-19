import React from "react";
import * as S from "./style";

const index = () => {
  return (
    <>
      <S.Box>
        <S.BorrowNum>1</S.BorrowNum>
        <S.Borrow>
          대여일
          <S.Date>2023.09.15</S.Date>
        </S.Borrow>
        <S.Return>
          반납일
          <S.Date>2023.09.22</S.Date>
        </S.Return>
      </S.Box>
    </>
  );
};

export default index;

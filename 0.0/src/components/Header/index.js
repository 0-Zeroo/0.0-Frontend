import React from "react";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
const index = () => {
  return (
    <>
      <S.Container>
        <S.Img src={logo} />
        <S.Img src={user} />
      </S.Container>
    </>
  );
};

export default index;

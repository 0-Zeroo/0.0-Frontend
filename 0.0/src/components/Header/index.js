import React from "react";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
const index = () => {
  return (
    <>
      <S.Container>
        <S.ImgBox>
          <S.Img src={logo} />
          <S.Img src={user} />
        </S.ImgBox>
        <S.TextBox>
          <S.Box>
            <S.Text>로그인</S.Text>
          </S.Box>
        </S.TextBox>
      </S.Container>
    </>
  );
};

export default index;

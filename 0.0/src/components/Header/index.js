import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
const index = () => {
  return (
    <>
      <S.Container>
        <S.ImgBox>
          <Link to="/">
            <S.Img src={logo} />
          </Link>
          <Link to="/mypage">
            <S.Img src={user} />
          </Link>
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

import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import list from "../../assets/list.svg";
import over from "../../assets/over.svg";

const index = () => {
  return (
    <>
      <S.Container>
        <S.ImgBox>
          <Link to="/">
            <S.Logo src={logo} />
          </Link>
          <Link to="/list">
            <S.List src={list} />
          </Link>
          <Link to="/over">
            <S.Over src={over} />
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

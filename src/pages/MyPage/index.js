import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase"; 
import * as S from "./style";
import DateBox from "./DateBox/index";
import Borrow from "./Borrow/index";

const Index = () => {
  const [userEmail, setUserEmail] = useState(null); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email); 
      } else {
        setUserEmail(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <S.Background>
        <S.Stroke />
        <S.Info>{userEmail ? userEmail : "로그인 하세요"}</S.Info>
        <Link to="/password">
          <S.Password>비밀번호 바꾸기</S.Password>
        </Link>
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

export default Index;

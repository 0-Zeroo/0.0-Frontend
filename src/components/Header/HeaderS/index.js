import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import logo from '../../../assets/logo.svg';
import user from '../../../assets/user.svg';
import { auth } from '../../../firebase'; // 수정된 경로

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email);
      } else {
        setIsLoggedIn(false);
        setUserEmail('');
      }
    });
  }, []);

  return (
    <>
      <S.Container>
        <S.ImgBox>
          <Link to="/">
            <S.Img src={logo} alt="logo" />
          </Link>
          <Link to="/mypage">
            <S.Img src={user} alt="user" />
          </Link>
        </S.ImgBox>
        <S.TextBox>
          {isLoggedIn ? (
            // 인라인 스타일을 사용하여 텍스트 색상을 흰색으로 설정
            <S.Text style={{ color: 'white' }}>{userEmail}</S.Text>
          ) : (
            <Link to="/login">
              <S.Box>
                <S.Text>로그인</S.Text>
              </S.Box>
            </Link>
          )}
        </S.TextBox>
      </S.Container>
    </>
  );
};

export default Header;

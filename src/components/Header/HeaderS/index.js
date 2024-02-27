import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import logo from '../../../assets/logo.svg';
import user from '../../../assets/user.svg';
import { auth } from '../../../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        setIsLoggedIn(true);
        const firestore = getFirestore(); 
        const userRef = doc(firestore, 'People', userAuth.email); 
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          setUserName(docSnap.data().NAME); 
        } else {
          console.log("No such document!");
          setUserName('');
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    });

    return () => unsubscribe(); 
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
            <S.Text style={{ color: 'white' }}>{userName}</S.Text>
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

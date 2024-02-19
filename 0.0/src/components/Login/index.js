import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backgroundStyle, modalStyle, logoStyle, textStyle, inputStyle } from './style';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import logo from "../../assets/logo.svg";

const Search = async (str1, str2) => {
  const umbrellaRef = doc(firestore, "ID", str1);
  const umbrellaDoc = await getDoc(umbrellaRef);
  return umbrellaDoc.data()?.Password === str2;
};

const LoginModal = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

const handleKeyDown = async (event) => {
  if (event.key === 'Enter') {
    const result = await Search(inputValue1, inputValue2);
    if (result) {
      console.log("login");
      navigate('/'); 
    } else {
      console.log("fail");
      alert("틀렸습니다 다시하세요!"); 
    }
    setInputValue1('');
    setInputValue2('');
  }
};

  return (
      <div style={backgroundStyle}>
        <div style={modalStyle}>
          <img src={logo} alt="Logo" style={logoStyle}/>
          <div style={textStyle}>Login</div>
          <input
              style={inputStyle}
              type="text"
              placeholder="아이디"
              value={inputValue1}
              onChange={handleInputChange1}
          />
          <input
              style={inputStyle}
              type="password" 
              placeholder="비밀번호"
              value={inputValue2}
              onChange={handleInputChange2}
              onKeyDown={handleKeyDown}
          />
        </div>
      </div>
  );
};

export default LoginModal;

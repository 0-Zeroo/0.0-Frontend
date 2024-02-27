import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backgroundStyle, modalStyle, logoStyle, textStyle, inputStyle } from './style';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebase'; 
import logo from "../../assets/logo.svg";

const Login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user); 
    return true; 
  } catch (error) {
    console.error("형 이건 아니지 실패했짜나 다시해봐");
    return false; 
  }
};

const LoginModal = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      const result = await Login(inputEmail, inputPassword);
      if (result) {
        console.log("Login successful");
        navigate('/'); 
      } else {
        alert("형 비밀번호 아이디 틀렸어"); 
      }
      setInputEmail('');
      setInputPassword('');
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={modalStyle}>
        <img src={logo} alt="Logo" style={logoStyle}/>
        <div style={textStyle}>Login</div>
        <input
          style={inputStyle}
          type="email"
          placeholder="이메일"
          value={inputEmail}
          onChange={handleEmailChange}
        />
        <input
          style={inputStyle}
          type="password" 
          placeholder="비밀번호"
          value={inputPassword}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default LoginModal;

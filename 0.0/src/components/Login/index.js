import React, { useState } from 'react';

const backgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed', 
  width: '350px',
  height: '273px',
  backgroundColor: '#393939',
  borderRadius: '40px',
  color: 'white',
  padding: '20px',
  boxSizing: 'border-box'
};

const logoStyle = {
  marginBottom: '24px'
};

const textStyle = {
  fontFamily: 'Pretendard, sans-serif',
  fontWeight: '600', 
  fontSize: '24px',
  marginBottom: '24px'
};

const inputStyle = {
  width: '200px',
  height: '22px', 
  backgroundColor: '#4B4B4B',
  color: 'white',
  fontFamily: 'Pretendard, sans-serif',
  fontWeight: '400',
  fontSize: '12px',
  border: 'none',
  borderRadius: '13px',
  padding: '10px 15px',
  outline: 'none',
  marginBottom: '24px' 
};

const LoginModal = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setInputValue(''); 
    }
  };

  return (
    <div style={backgroundStyle}> 
      <div style={modalStyle}>
        <img src="/0.0/src/assets/logo.svg" alt="Logo" style={logoStyle} />
        <div style={textStyle}>Login</div>
        <input
          style={inputStyle}
          type="text"
          placeholder="Google로 로그인하기"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} 
        />
      </div>
    </div>
  );
};

export default LoginModal;

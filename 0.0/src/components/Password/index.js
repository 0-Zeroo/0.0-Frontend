import React, { useState, useEffect } from 'react';

const PasswordChangeForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 요따가 비밀번호 변경 파베 추가해야행
    console.log('Current Password:', currentPassword, 'New Password:', newPassword);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', paddingTop: '60px' }}>
      <h3 style={{ color: 'white', marginBottom: '20px' }}>비밀번호 변경</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '20px' }}>
        <input
          type="password"
          placeholder="현재 비밀번호"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', color: 'black' }}
        />
        <input
          type="password"
          placeholder="바꿀 비밀번호"
          value={newPassword}
          onChange={handleNewPasswordChange}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', color: 'black' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#606060', color: 'white', border: 'none', cursor: 'pointer' }}>
          확인
        </button>
      </form>
    </div>
  );
};

export default PasswordChangeForm;

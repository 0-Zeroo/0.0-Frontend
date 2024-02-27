import React, { useState } from 'react';
import { auth } from '../../firebase';
import { updatePassword } from 'firebase/auth';

const PasswordChangeForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword.length < 6) {
      setError('비밀번호는 최소 6자리 이상이어야 합니다.');
      return; 
    }

    const user = auth.currentUser;

    if (user) {
      try {
        await updatePassword(user, newPassword);
        alert('비밀번호가 성공적으로 변경되었습니다.');
        setNewPassword('');
        setError(''); 
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('로그인된 사용자가 없습니다.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', paddingTop: '60px' }}>
      <h3 style={{ color: 'white', marginBottom: '20px' }}>비밀번호 변경</h3>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '300px', gap: '20px'}}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="password"
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={handleNewPasswordChange}
          style={{padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', color: 'black'}}
        />
        <button type="submit" style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: '#606060',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}>
          확인
        </button>
      </form>
    </div>
  );
};

export default PasswordChangeForm;

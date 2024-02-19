import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

const PasswordChangeForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentId, setCurrentId] = useState('');
  const [error, setError] = useState('');

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleCurrentIdChange = (event) => {
    setCurrentId(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDocRef = doc(firestore, "ID", currentId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      setError('아이디가 존재하지 않습니다.');
      return;
    }

    if (userDocSnap.data()?.Password !== currentPassword) {
      setError('현재 비밀번호가 일치하지 않습니다.');
      return;
    }

    await updateDoc(userDocRef, { Password: newPassword });

    setCurrentId('');
    setCurrentPassword('');
    setNewPassword('');
    setError('');
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
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '300px', gap: '20px'}}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input
              type="text"
              placeholder="아이디"
              value={currentId}
              onChange={handleCurrentIdChange}
              style={{padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', color: 'black'}}
          />
          <input
              type="password"
              placeholder="현재 비밀번호"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              style={{padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', color: 'black'}}
          />
          <input
              type="password"
              placeholder="바꿀 비밀번호"
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
'use client';

import { useState } from 'react';
import TextField from '../TextField/TextField';
import BaseModal from './BaseModal';
import styles from './Modals.module.css';
import Button from '../Button/Button';
import { signUp } from '@/app/api/crypto/cryptoApi';
import { useRouter } from 'next/navigation';

function SignUpModal({ setOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const router = useRouter();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      const data = await signUp(formData);
      if (data.user.id) {
        await localStorage.setItem('user', data.user.id);
        setOpenModal(false);
        router.push('/dashboard');
      }
    } else {
      alert('Senhas não são iguais');
    }
  }

  return (
    <BaseModal setOpenModal={setOpenModal}>
      <>
        <p className={styles.title}>
          Sign up to{' '}
          <span style={{ color: '#FBAB34', marginLeft: 5 }}>Coin</span>
          Synch
        </p>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={(e) => handleSubmit(e)}
          className={styles.form}
        >
          <TextField
            type={'text'}
            name={'name'}
            placeholder={'Name'}
            value={formData.name}
            onChange={(e) => handleChange(e)}
            width={384}
            inputStyles={{ marginTop: 24 }}
          />
          <TextField
            type={'email'}
            name={'email'}
            placeholder={'Email'}
            value={formData.email}
            onChange={(e) => handleChange(e)}
            width={384}
            inputStyles={{ marginTop: 24 }}
          />
          <TextField
            type={'password'}
            name={'password'}
            placeholder={'Password'}
            value={formData.password}
            onChange={(e) => handleChange(e)}
            width={384}
            inputStyles={{ marginTop: 24 }}
          />
          <TextField
            type={'password'}
            name={'confirmPassword'}
            placeholder={'Confirm password'}
            value={formData.confirmPassword}
            onChange={(e) => handleChange(e)}
            width={384}
            inputStyles={{ marginTop: 24 }}
          />
          <div
            style={{
              display: 'flex',
              margin: '24px 0px',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <input type="checkbox" />
            <p className={styles.userAgreement}>
              I have read and accept the{' '}
              <span className={styles.boldText}>Privacy Policy</span> and{' '}
              <span className={styles.boldText}>Terms of User Sign up.</span>
            </p>
          </div>
          <Button
            text={'Sign Up'}
            type="submit"
            buttonStyles={{
              borderRadius: 32,
            }}
            height={48}
          />
        </form>
      </>
    </BaseModal>
  );
}

export default SignUpModal;

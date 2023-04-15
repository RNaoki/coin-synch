'use client';
import { useState } from 'react';

import TextField from '../TextField/TextField';
import BaseModal from './BaseModal';
import styles from './Modals.module.css';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
import { signIn } from '@/app/api/crypto/cryptoApi';

function SignInModal({ setOpenModal, setOpenSignUp }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function signInHandle(e) {
    e.preventDefault();
    const data = await signIn(formData);
    if (data.user.id) {
      await localStorage.setItem('user', data.user.id);
      setOpenModal(false);
      router.push('/dashboard');
    }
  }

  function openSignUp() {
    setOpenSignUp(true);
    setOpenModal(false);
  }

  return (
    <BaseModal setOpenModal={setOpenModal}>
      <>
        <p className={styles.title}>
          Sign in to{' '}
          <span style={{ color: '#FBAB34', marginLeft: 5 }}>Coin</span>
          Synch
        </p>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={(e) => signInHandle(e)}
          className={styles.form}
        >
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
          <div
            style={{
              display: 'flex',
              margin: '0px 0px 24px 0px',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 9,
            }}
          >
            <p className={styles.forgotPassword} style={{ textAlign: 'end' }}>
              Forgot password?
            </p>
          </div>
          <Button
            text={'Sign In'}
            type="submit"
            buttonStyles={{
              borderRadius: 32,
            }}
            height={48}
          />
        </form>
        <div
          style={{
            display: 'flex',
            margin: '24px 0px',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            cursor: 'pointer',
          }}
          onClick={() => {
            openSignUp();
          }}
        >
          <p className={styles.userAgreement} style={{ textAlign: 'center' }}>
            Don’t have an account?{' '}
            <span className={styles.boldText}>
              {' '}
              Sign up to <span style={{ color: '#FBAB34' }}>Coin</span>
              <span style={{ color: '#8C8A97' }}>Synch</span>
            </span>
          </p>
        </div>
      </>
    </BaseModal>
  );
}

export default SignInModal;

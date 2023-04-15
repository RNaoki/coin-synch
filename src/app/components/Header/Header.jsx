'use client';
import Image from 'next/image';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { getCryptos, getUser } from '@/app/api/crypto/cryptoApi';
import { useEffect, useState } from 'react';
import SignUpModal from '../Modals/SignUpModal';
import SignInModal from '../Modals/SignInModal';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [cryptoData, setCryptoData] = useState([]);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState({});

  const router = useRouter();

  useEffect(() => {
    async function getCurrentUser() {
      let currentUser = await getUser(localStorage.getItem('user'));
      await setUser(currentUser[0]);
    }
    async function populateCryptoData() {
      let data = await getCryptos();
      setCryptoData(data);
    }
    localStorage.getItem('user') && getCurrentUser();
    populateCryptoData();
  }, []);

  const getChange = (value) => {
    return value[0] === '-' ? value : `+${value}`;
  };

  const getChangeStyles = (value) => {
    return value[0] === '-' ? { color: '#A12226' } : { color: '#149E55' };
  };

  async function logOut() {
    await localStorage.removeItem('user');
    setExpanded(false);
    router.push('/');
  }

  function renderLoggedIn() {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={() => setExpanded(!expanded)}
      >
        <Image src="/UserPhoto.svg" width={32} height={32} alt="User Photo" />
        <p className={styles.userName}>
          {user && user.name}
          <Image
            src="/ArrowDown.svg"
            width={8}
            height={5}
            style={
              expanded
                ? { marginLeft: 4, transform: 'rotate(180deg)' }
                : { marginLeft: 4 }
            }
            alt="Log Out Icon"
          />
        </p>
        {expanded && (
          <div className={styles.logoutOption} onClick={() => logOut()}>
            <Image
              src="/LogOut.svg"
              width={16}
              height={16}
              alt="Log Out Icon"
            />
            Logout
          </div>
        )}
      </div>
    );
  }

  function renderSignIn() {
    return (
      <div className={styles.headerPartition}>
        <div className={styles.priceContainer}>
          <div className={styles.priceCarousel}>
            {cryptoData.map((crypto) => {
              return (
                <div
                  key={crypto.asset_id}
                  style={{ display: 'flex', marginRight: 24 }}
                >
                  <div>{crypto.asset_id}</div>
                  <div>R$ {crypto.price_usd.toFixed(2)}</div>
                  <div style={getChangeStyles(crypto.change)}>
                    {getChange(crypto.change)}
                  </div>
                </div>
              );
            })}
            {cryptoData.map((crypto) => {
              return (
                <div
                  key={crypto.asset_id}
                  style={{ display: 'flex', marginRight: 24 }}
                >
                  <div>{crypto.asset_id}</div>
                  <div>{crypto.price_usd.toFixed(2)}</div>
                  <div style={getChangeStyles(crypto.change)}>
                    {getChange(crypto.change)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={styles.clickableText}
          onClick={() => setOpenSignIn(true)}
        >
          Sign In
        </div>
        <div>
          <Button
            buttonStyles={{
              backgroundColor: '#FBAB34',
              borderRadius: 32,
            }}
            text={'Sign Up'}
            width={100}
            height={32}
            onClick={() => setOpenSignUp(true)}
          />{' '}
        </div>
        <>
          <Image
            src="/MobileButton.svg"
            width={24}
            height={24}
            alt="CoinSynch Logo"
            onClick={() => setOpenSignIn(true)}
            className={styles.mobileButton}
          />
        </>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerPartition}>
        <div className={styles.imageContainer} onClick={() => router.push('/')}>
          <Image src="/Logo.svg" width={124} height={21} alt="CoinSynch Logo" />
        </div>
        <div className={styles.headerPartition}>
          <p style={{ marginRight: 24 }}>About us</p>
          <p>Top Cryptos</p>
        </div>
      </div>
      {localStorage.getItem('user') ? renderLoggedIn() : renderSignIn()}

      {openSignUp && <SignUpModal setOpenModal={setOpenSignUp} />}
      {openSignIn && (
        <SignInModal
          setOpenModal={setOpenSignIn}
          setOpenSignUp={setOpenSignUp}
        />
      )}
    </div>
  );
}

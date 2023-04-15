'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { getCrypto, getUser } from '../api/crypto/cryptoApi';
import { useEffect, useState } from 'react';
import Wallet from '../components/Wallet/Wallet';
import AddCryptoModal from '../components/Modals/AddCryptoModal';
import TransferCryptoModal from '../components/Modals/TransferCryptoModal';
import SideMenu from '../components/SideMenu/SideMenu';

export default function Home() {
  const [user, setUser] = useState({});
  const [randCrypto, setRandCrypto] = useState({});
  const [openCryptoModal, setOpenCryptoModal] = useState(false);
  const [openCryptoTradeModal, setOpenCryptoTradeModal] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState({});

  useEffect(() => {
    async function getCurrentUser() {
      let currentUser = await getUser(localStorage.getItem('user'));
      await setUser(currentUser[0]);
    }
    async function getRandCrypto() {
      let currentCrypto = await getCrypto(getCryptoId());
      await setRandCrypto(currentCrypto[0]);
    }
    function getCryptoId() {
      let availableCryptos = [
        'BTC',
        'DOGE',
        'ETH',
        'BNB',
        'XRP',
        'ADA',
        'MATIC',
        'SOL',
        'DOGE',
        'DOT',
        'LTC',
      ];
      return availableCryptos[
        Math.floor(Math.random() * availableCryptos.length)
      ];
    }
    getRandCrypto();
    getCurrentUser();
  }, []);

  useEffect(() => {
    async function getCurrentUser() {
      let currentUser = await getUser(localStorage.getItem('user'));
      await setUser(currentUser[0]);
    }
    getCurrentUser();
  }, [selectedCrypto]);

  const getChange = (value) => {
    return value[0] === '-' ? value : `+${value}`;
  };

  const getChangeStyles = (value) => {
    return value[0] === '-' ? { color: '#A12226' } : { color: '#149E55' };
  };

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <main className={styles.container} key={user.id}>
      <SideMenu />
      <div className={styles.content}>
        <div className={styles.headerContent}>
          <div className={styles.balance}>
            <div className={styles.balanceLeftContent}>
              <Image
                src="/Balance.svg"
                width={64}
                height={64}
                alt="Balance Icon"
                style={{ marginRight: 16 }}
                className={styles.balanceIcon}
              />
              <div className={styles.balanceTitle}>
                <p>Balance in US$</p>
                <p className={styles.balanceTitleDescription}>
                  (approximately)
                </p>
              </div>
            </div>
            {user.currentMoney && (
              <p key={user.currentMoney} className={styles.value}>
                {USDollar.format(user.currentMoney)}
              </p>
            )}
          </div>
          <div className={styles.daily}>
            <p
              className={styles.cardText}
              style={{ padding: '8px 0px 0px 8px' }}
            >
              Daily Variation
            </p>
            <div className={styles.cryptoContainer}>
              <div className={styles.cryptoText}>
                <div className={styles.cryptoInfo}>
                  <Image
                    src={randCrypto.url ? randCrypto.url : 'Crypto.svg'}
                    width={24}
                    height={24}
                    alt="Crypto icon"
                    style={{ marginRight: 8 }}
                  />
                  {randCrypto.asset_id}
                </div>
                {randCrypto.change && (
                  <div
                    className={styles.cryptoChange}
                    style={getChangeStyles(randCrypto.change)}
                  >
                    {getChange(randCrypto.change)}%
                  </div>
                )}
              </div>
              <Image
                src={'/CryptoGraph.svg'}
                height={89}
                width={187}
                alt="Crypto Graph"
              />
            </div>
          </div>
          <div className={styles.news}>
            <div style={{ padding: 8 }}>
              <p className={styles.newsTitle}>NFT's news</p>
              <p
                style={{ width: 107, margin: '16px 0px' }}
                className={styles.cardText}
              >
                New ElephantX NFT to be lauched!
              </p>
              <p className={styles.more}>Read more +</p>
            </div>
            <Image
              src={'/Elephant.svg'}
              height={143}
              width={143}
              alt="Crypto Graph"
            />
          </div>
        </div>
        <div>
          <Wallet
            user={user}
            setOpenModal={setOpenCryptoModal}
            setOpenTradeModal={setOpenCryptoTradeModal}
            setSelectedCrypto={setSelectedCrypto}
          />
        </div>
      </div>
      {openCryptoModal && (
        <AddCryptoModal setOpenModal={setOpenCryptoModal} setUser={setUser} />
      )}
      {openCryptoTradeModal && (
        <TransferCryptoModal
          setOpenModal={setOpenCryptoTradeModal}
          selectedCrypto={selectedCrypto}
          setUser={setUser}
        />
      )}
    </main>
  );
}

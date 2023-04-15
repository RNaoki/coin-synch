'use client';
import styles from './TopCryptos.module.css';
import { useEffect, useState } from 'react';
import { getCryptos } from '@/app/api/crypto/cryptoApi';
import Button from '../Button/Button';
import Image from 'next/image';

export default function TopCryptos() {
  const [cryptoData, setCryptoData] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    async function populateCryptoData() {
      let data = await getCryptos();
      setCryptoData(data);
    }
    populateCryptoData();
  }, []);

  const getChange = (value) => {
    return value[0] === '-' ? value : `+${value}`;
  };

  const getChangeStyles = (value) => {
    return value[0] === '-' ? { color: '#A12226' } : { color: '#149E55' };
  };

  return (
    <>
      <table className={styles.topCryptosTable}>
        <tbody>
          <tr>
            <td style={{ width: '12%' }}>
              <div className={styles.tableTitle}>#</div>
            </td>
            <td style={{ width: '30%' }}>
              <div className={styles.tableTitle}>Crypto</div>
            </td>
            <td style={{ width: '27%' }}>
              <div className={styles.tableTitle}>Price</div>
            </td>
            <td style={{ width: '20%' }}>
              <div className={styles.tableTitle}>Change</div>
            </td>
            <td style={{ width: '10%' }}>
              <div className={styles.tableTitle}>Trade</div>
            </td>
          </tr>
          {cryptoData
            .slice(0, expanded ? cryptoData.length : 5)
            .map((crypto, index) => {
              return (
                <tr style={{ height: 64 }} key={index}>
                  <td>{(index + 1).toString().padStart(2, '0')}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {
                        <Image
                          src={crypto.url ? crypto.url : '/Crypto.svg'}
                          width={32}
                          height={32}
                          alt="Crypto Icon"
                          style={{ marginRight: 16 }}
                        />
                      }
                      <p>
                        {crypto.name}{' '}
                        <span style={{ color: '#8C8A97' }}>
                          {crypto.asset_id}
                        </span>
                      </p>
                    </div>
                  </td>
                  <td>US$ {crypto.price_usd.toFixed(2)}</td>
                  <td style={getChangeStyles(crypto.change)}>
                    {getChange(crypto.change)}
                  </td>
                  <td style={{ width: 40 }}>
                    <Button
                      text="Buy"
                      buttonStyles={{
                        backgroundColor: '#149E55',
                        borderRadius: 32,
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 16,
                      }}
                      width={80}
                      height={32}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div
        className={styles.viewTable}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? 'View less' : 'View more +'}
      </div>
    </>
  );
}

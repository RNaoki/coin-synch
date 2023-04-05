import Image from 'next/image';
import styles from './Header.module.css';
import Button from '../Button/Button';

let fakeData = [
  { id: 1, name: 'BIT', current: '23,62', float: '+7,082' },
  { id: 2, name: 'DOG', current: '23,62', float: '-5,230' },
  { id: 3, name: 'ETH', current: '23,62', float: '+1,023' },
  { id: 4, name: 'SOL', current: '23,62', float: '+3,908' },
  { id: 5, name: 'XLM', current: '23,62', float: '-1,906' },
];

export default function Header() {
  const checkFloat = (float) => {
    let isPositive = float[0] === '+';
    return (
      <div style={{ color: isPositive ? '#149E55' : '#A12226' }}>{float}</div>
    );
  };

  return (
    <div className={styles['container']}>
      <div className={styles['header-partition']}>
        <div className={styles['image-container']}>
          <Image src="/Logo.svg" width={124} height={21} alt="CoinSynch Logo" />
        </div>
        <div className={styles['header-partition']}>
          <p style={{ marginRight: 24 }}>About us</p>
          <p>Top Cryptos</p>
        </div>
      </div>
      <div className={styles['header-partition']}>
        <div className={styles['price-container']}>
          <div className={styles['price-carousel']}>
            {fakeData.map((cripto) => {
              return (
                <div
                  key={cripto.id}
                  style={{ display: 'flex', marginRight: 24 }}
                >
                  <div>{cripto.name}</div>
                  <div>{cripto.current}</div>
                  <div>{checkFloat(cripto.float)}</div>
                </div>
              );
            })}
            {fakeData.map((cripto) => {
              return (
                <div
                  key={cripto.id}
                  style={{ display: 'flex', marginRight: 24 }}
                >
                  <div>{cripto.name}</div>
                  <div>{cripto.current}</div>
                  <div>{checkFloat(cripto.float)}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles['clickable-text']}>Sign In</div>
        <Button
          buttonStyles={{
            backgroundColor: '#FBAB34',
            borderRadius: 32,
          }}
          text={'Sign Up'}
          width={100}
          height={32}
        />
      </div>
    </div>
  );
}

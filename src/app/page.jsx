'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/Button/Button';
import Tag from './components/Tag/Tag';
import Card from './components/Card/Card';
import TopCryptos from './components/TopCryptos/TopCryptos';
import Carousel from './components/Carousel/Carousel';
import Subscribe from './components/Subscribe/Subscribe';

export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.container}>
        <div className={styles.description}>
          <p className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <div className={styles.button}>
            <Button
              buttonStyles={{
                backgroundColor: '#FBAB34',
                borderRadius: 32,
              }}
              icon={{
                src: '/ArrowRight.svg',
                width: 12,
                height: 12,
                alt: 'Arrow Right',
              }}
              text="SIGN UP NOW"
              width={278}
              height={48}
            />
          </div>
          <div className={styles.tags}>
            <Tag text={'Cryptos'} />
            <Tag text={'NFTs'} />
            <Tag text={'Games'} />
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: 247,
          position: 'relative',
          marginTop: 56,
          marginBottom: 120,
        }}
      >
        <Image
          alt="Wave background"
          src="/WaveBg.svg"
          fill="true"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cards}>
          <div style={{ display: 'flex', marginBottom: 32 }}>
            <Card
              icon={{
                src: '/Coin.svg',
                width: 64,
                height: 64,
                alt: 'Coin icon',
              }}
              title={'Crypto Solutions'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, '
              }
            />
            <Card
              icon={{
                src: '/Crypto.svg',
                width: 64,
                height: 64,
                alt: 'Coin icon',
              }}
              title={'Crypto Solutions'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, '
              }
            />
          </div>
          <div style={{ display: 'flex', marginLeft: 105 }}>
            <Card
              icon={{
                src: '/Graph.svg',
                width: 64,
                height: 64,
                alt: 'Coin icon',
              }}
              title={'Crypto Solutions'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, '
              }
            />
            <Card
              icon={{
                src: '/Device.svg',
                width: 64,
                height: 64,
                alt: 'Coin icon',
              }}
              title={'Crypto Solutions'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, '
              }
            />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infoLabel}>Lorem ipsum</p>
          <p className={styles.infoTitle}>Lorem ipsum</p>
          <p className={styles.infoDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
          <div className={styles.signButton}>
            <Button
              buttonStyles={{
                backgroundColor: '#FBAB34',
                borderRadius: 32,
              }}
              text="SIGN UP NOW"
              width={176}
              height={48}
            />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.topCryptos}>Top Cryptos</div>
        <TopCryptos />
      </div>
      <div>
        <Subscribe />
      </div>
    </main>
  );
}

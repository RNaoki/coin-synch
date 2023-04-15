'use client';
import Image from 'next/image';
import styles from './Footer.module.css';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={pathname === '/' ? { justifyContent: 'space-between' } : {}}
      >
        <p className={styles.copyright}>
          Copyright © 2022 - All rights reserved
        </p>
        {pathname === '/' && (
          <div className={styles.imageContainer}>
            <Image
              src="/Logo.svg"
              alt="CoinSynch Logo"
              width={72}
              height={14}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
}

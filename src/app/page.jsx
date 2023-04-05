import Image from 'next/image';
import { Roboto } from 'next/font/google';
import styles from './page.module.css';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.description} ${roboto.className}`}>a</div>
    </main>
  );
}

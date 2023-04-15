import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({ title, text, icon }) {
  return (
    <div className={styles.container}>
      {icon && (
        <Image
          src={icon.src}
          height={icon.height}
          width={icon.width}
          alt={icon.alt}
        />
      )}
      <p>For your company</p>
      {title}
      {text}
    </div>
  );
}

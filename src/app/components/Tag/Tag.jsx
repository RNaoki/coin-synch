import styles from './Tag.module.css';

export default function Tag({ text }) {
  return (
    <div className={styles.container}>
      <div>{text}</div>
    </div>
  );
}

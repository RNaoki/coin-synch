import styles from './Button.module.css';

export default function Button({ buttonStyles, text, width, height }) {
  return (
    <div
      className={styles.container}
      style={{ ...buttonStyles, width, height }}
    >
      {text}
    </div>
  );
}

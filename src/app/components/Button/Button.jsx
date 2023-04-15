import Image from 'next/image';
import styles from './Button.module.css';

export default function Button({
  buttonStyles,
  text,
  width,
  height,
  icon,
  type,
  onClick,
}) {
  return (
    <>
      <button
        className={styles.container}
        style={{ ...buttonStyles, width, height }}
        type={type}
        onClick={onClick}
      >
        {text}
        {icon && (
          <Image
            src={icon.src}
            height={icon.height}
            width={icon.width}
            alt={icon.alt}
            style={{ marginLeft: 10 }}
          />
        )}
      </button>
      <button
        className={styles.containerMobile}
        style={{ ...buttonStyles, height }}
        type={type}
        onClick={onClick}
      >
        {text}
        {icon && (
          <Image
            src={icon.src}
            height={icon.height}
            width={icon.width}
            alt={icon.alt}
            style={{ marginLeft: 10 }}
          />
        )}
      </button>
    </>
  );
}

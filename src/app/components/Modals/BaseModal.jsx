import Image from 'next/image';
import styles from './Modals.module.css';

function BaseModal({ children, setOpenModal }) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Image
          width={16}
          height={16}
          alt="close modal"
          src={'/Close.svg'}
          onClick={() => setOpenModal(false)}
          className={styles.closeButton}
        />
        {children}
      </div>
    </div>
  );
}

export default BaseModal;

import Image from 'next/image';
import styles from './SideMenu.module.css';

function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.item} style={{ marginTop: 42 }}>
        <Image src={'/Wallet.svg'} height={32} width={32} alt={'Wallet Icon'} />
        <div className={styles.tooltip}>
          <Image
            src={'/Tooltip.svg'}
            height={40}
            width={139}
            alt={'Tooltip Icon'}
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image src={'/Crypto.svg'} height={32} width={32} alt={'Crypto Icon'} />
        <div className={styles.tooltip}>
          <Image
            src={'/Tooltip.svg'}
            height={40}
            width={139}
            alt={'Tooltip Icon'}
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image src={'/Coin.svg'} height={32} width={32} alt={'Coin Icon'} />
        <div className={styles.tooltip}>
          <Image
            src={'/Tooltip.svg'}
            height={40}
            width={139}
            alt={'Tooltip Icon'}
          />
        </div>
      </div>
      <div className={styles.item}>
        <Image src={'/Graph.svg'} height={32} width={32} alt={'Graph Icon'} />
        <div className={styles.tooltip}>
          <Image
            src={'/Tooltip.svg'}
            height={40}
            width={139}
            alt={'Tooltip Icon'}
          />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

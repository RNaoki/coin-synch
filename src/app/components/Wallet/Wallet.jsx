'use client';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from './Wallet.module.css';

export default function Wallet({
  user,
  setOpenModal,
  setOpenTradeModal,
  setSelectedCrypto,
}) {
  const getChange = (value) => {
    return value[0] === '-' ? value : `+${value}`;
  };

  const getChangeStyles = (value) => {
    return value[0] === '-' ? { color: '#A12226' } : { color: '#149E55' };
  };

  const EmptyWallet = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Image
          src="/EmptyWallet.svg"
          width={60}
          height={60}
          alt="Empty Wallet"
        />
        <p className={styles.emptyTitle}>Nothing here yet</p>
        <p className={styles.emptyInfo}>Add a crypto and start earning</p>
      </div>
    );
  };

  const selectValue = (crypto) => {
    setOpenTradeModal(true);
    setSelectedCrypto(crypto);
  };

  const FilledWallet = () => {
    return (
      <>
        <div className={styles.divider} />
        <table className={styles.walletTable}>
          <tbody style={{ width: '100%' }}>
            <tr>
              <td style={{ width: '10%' }}>
                <div className={styles.tableTitle}>#</div>
              </td>
              <td style={{ width: '30%' }}>
                <div className={styles.tableTitle}>Crypto</div>
              </td>
              <td style={{ width: '30%' }}>
                <div className={styles.tableTitle}>Holdings</div>
              </td>
              <td style={{ width: '30%' }}>
                <div className={styles.tableTitle}>Change</div>
              </td>
              <td style={{ width: '20%' }}>
                <div className={styles.tableTitle}>Trade</div>
              </td>
            </tr>
            {user.cryptoWallet.map((crypto, index) => {
              return (
                <tr style={{ height: 64 }} key={index}>
                  <td>{(index + 1).toString().padStart(2, '0')}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {
                        <Image
                          src={crypto.url ? crypto.url : '/Crypto.svg'}
                          width={32}
                          height={32}
                          alt="Crypto Icon"
                          style={{ marginRight: 16 }}
                        />
                      }
                      <p>
                        {crypto.name}{' '}
                        <span style={{ color: '#8C8A97' }}>
                          {crypto.asset_id}
                        </span>
                      </p>
                    </div>
                  </td>
                  <td>
                    <p className={styles.ownedUs}>
                      US$ {(crypto.price_usd * crypto.amount).toFixed(2)}
                    </p>
                    <p className={styles.ownedCrypto}>
                      {crypto.amount} {crypto.asset_id}
                    </p>
                  </td>
                  <td style={getChangeStyles(crypto.change)}>
                    {getChange(crypto.change)}
                  </td>
                  <td
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: 64,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    className={styles.tradeIcon}
                  >
                    <>
                      <div
                        className={styles.tradeIcon}
                        onClick={() => selectValue(crypto)}
                      >
                        <Image
                          src="/Trade.svg"
                          width={16}
                          height={16}
                          alt="Trade Icon"
                        />
                      </div>
                      <div className={styles.tooltip}>
                        <Image
                          src="/TradeTooltip.svg"
                          width={100}
                          height={56}
                          alt="Trade Icon"
                        />
                      </div>
                    </>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        <Image
          src="/Wallet.svg"
          width={32}
          height={32}
          alt="Wallet Icon"
          style={{ marginRight: 16 }}
        />
        <p className={styles.title}>My Wallet</p>
      </div>
      <div className={styles.addButton}>
        <Button
          buttonStyles={{
            backgroundColor: '#FBAB34',
            borderRadius: 32,
            flexDirection: 'row-reverse',
            justifyContent: 'space-around',
            paddingRight: 15,
          }}
          icon={{
            src: '/Add.svg',
            width: 12,
            height: 12,
            alt: 'Add icon',
          }}
          text="Add crypto"
          width={120}
          height={32}
          onClick={() => setOpenModal(true)}
        />
      </div>
      {user.cryptoWallet && user.cryptoWallet.length
        ? FilledWallet()
        : EmptyWallet()}
    </div>
  );
}

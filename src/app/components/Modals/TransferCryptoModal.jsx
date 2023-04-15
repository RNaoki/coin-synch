'use client';
import { useEffect, useState } from 'react';

import BaseModal from './BaseModal';
import styles from './Modals.module.css';
import Button from '../Button/Button';
import { transferCrypto } from '@/app/api/crypto/cryptoApi';
import TextField from '../TextField/TextField';
import TransferDropDown from '../TransferDropDown.jsx/TransferDropDown';

function TransferCryptoModal({ setOpenModal, selectedCrypto, setUser }) {
  const [formData, setFormData] = useState({
    ...selectedCrypto,
    transaction: 'Transfer in',
    transactionAmount: 0,
  });

  function handleChange(e) {
    let newFormData = { ...formData };
    newFormData.transaction = e;
    setFormData(newFormData);
  }

  function addTransactionAmount(e) {
    let newFormData = { ...formData };
    newFormData.transactionAmount = e.target.valueAsNumber;
    setFormData(newFormData);
  }

  async function addCryptoToWallet(e) {
    e.preventDefault();
    const data = await transferCrypto(formData);
    if (data) {
      setUser(data);
      setOpenModal(false);
    }
  }

  return (
    <BaseModal setOpenModal={setOpenModal}>
      <>
        <p className={styles.title}>Add Crypto</p>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={(e) => addCryptoToWallet(e)}
          className={styles.form}
        >
          <TransferDropDown
            setFormData={(e) => {
              handleChange(e);
            }}
            options={['Transfer in', 'Transfer out']}
          />
          <TextField
            type={'number'}
            name={'amount'}
            placeholder={'0.00'}
            value={formData.transactionAmount}
            onChange={(e) => addTransactionAmount(e)}
            width={384}
            inputStyles={{ marginTop: 24, marginBottom: 24 }}
          />
          <Button
            text={'Transfer Crypto'}
            type="submit"
            buttonStyles={{
              borderRadius: 32,
            }}
            height={48}
            width={384}
          />
        </form>
      </>
    </BaseModal>
  );
}

export default TransferCryptoModal;

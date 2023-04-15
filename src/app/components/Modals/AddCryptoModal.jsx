'use client';
import { useEffect, useState } from 'react';

import BaseModal from './BaseModal';
import styles from './Modals.module.css';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import { addCrypto, getCryptos } from '@/app/api/crypto/cryptoApi';
import TextField from '../TextField/TextField';

function AddCryptoModal({ setOpenModal, setUser }) {
  const [formData, setFormData] = useState({});
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    async function populateCryptoData() {
      let data = await getCryptos();
      setCryptoData(data);
    }
    populateCryptoData();
  }, []);

  function handleChange(e) {
    let newFormData = e;
    if (formData.amount) {
      newFormData.amount = formData.amount;
    }
    setFormData(newFormData);
  }

  function addAmount(e) {
    let newFormData = formData;
    newFormData.amount = e.target.value;
    setFormData(newFormData);
  }

  async function addCryptoToWallet(e) {
    e.preventDefault();
    const data = await addCrypto(formData);
    if (data) {
      setUser(data);
      setOpenModal(false);
    } else {
      alert('Crypto already in your wallet');
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
          <DropDown
            placeholder="Choose Crypto"
            setFormData={(e) => {
              handleChange(e);
            }}
            options={cryptoData}
          />
          <TextField
            type={'number'}
            name={'amount'}
            placeholder={'0.00'}
            value={formData.amount}
            onChange={(e) => addAmount(e)}
            width={384}
            inputStyles={{ marginTop: 24, marginBottom: 24 }}
          />
          <Button
            text={'Add Crypto'}
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

export default AddCryptoModal;

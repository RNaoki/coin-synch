'use client';

import { useRef, useState } from 'react';
import TextField from '../TextField/TextField';
import styles from './Subscribe.module.css';
import Button from '../Button/Button';

function Subscribe() {
  const [formData, setFormData] = useState({
    email: '',
  });

  function handleChange(e) {
    setFormData({ email: e.target.value });
  }

  function subscribe(e) {
    e.preventDefault();
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: 'url("/Wave.svg"),url("/SubscribeBackground.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div>
        <p className={styles.subtitle}>Lorem ipsum </p>
        <p className={styles.title}>Lorem ipsum </p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
      </div>
      <div>
        <div className={styles.label}>Email</div>
        <form onSubmit={(e) => subscribe(e)}>
          <TextField
            name={'email'}
            value={formData.email}
            onChange={(e) => handleChange(e)}
            type={'email'}
            placeholder={'Email'}
            width={384}
            inputStyles={{ marginTop: 8, marginBottom: 21 }}
          />
          <Button
            text={'Subscribe'}
            type="submit"
            buttonStyles={{
              borderRadius: 32,
            }}
            height={48}
            width={384}
          />
        </form>
      </div>
    </div>
  );
}

export default Subscribe;

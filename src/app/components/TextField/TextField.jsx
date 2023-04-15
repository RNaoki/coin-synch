import { forwardRef } from 'react';
import styles from './TextField.module.css';

const TextField = ({
  placeholder,
  icon,
  type,
  width,
  inputStyles,
  onChange,
  value,
  name,
}) => {
  return (
    <>
      <input
        className={styles.inputField}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        style={{
          ...inputStyles,
          paddingLeft: icon && 40,
          width: width ? width : 'auto',
        }}
      />
      <input
        className={styles.inputFieldMobile}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        style={{
          ...inputStyles,
          paddingLeft: icon && 40,
          width: '100%',
        }}
      />
    </>
  );
};

export default TextField;

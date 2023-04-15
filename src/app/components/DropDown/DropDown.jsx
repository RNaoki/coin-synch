'use client';

import { useState } from 'react';
import styles from './DropDown.module.css';
import Image from 'next/image';

export default function DropDown({ placeholder, setFormData, options }) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(false);

  const selectOption = (option) => {
    setValue(option);
    setFormData(option);
    setExpanded(false);
  };

  return (
    <div>
      <div
        className={styles.container}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {value ? (
          <div
            className={styles.option}
            style={{ padding: 0, position: 'relative' }}
          >
            <Image
              src={value.url ? value.url : '/Crypto.svg'}
              width={16}
              height={16}
              alt="Crypto logo"
              style={{ marginRight: 8 }}
            />
            {value.name}
            <span className={styles.abrev}>{value.asset_id}</span>
          </div>
        ) : (
          <div style={{ position: 'relative' }}>{placeholder}</div>
        )}
        <Image
          src={expanded ? '/ArrowUp.svg' : '/ArrowDown.svg'}
          width={16}
          height={10}
          style={
            expanded
              ? {
                  position: 'absolute',
                  top: 22,
                  right: 20,
                  transform: 'rotate(180deg)',
                }
              : {
                  position: 'absolute',
                  top: 22,
                  right: 20,
                }
          }
          alt="Log Out Icon"
        />
      </div>

      {expanded && (
        <div className={styles.options}>
          {options.map((option) => {
            return (
              <div
                className={styles.option}
                onClick={() => selectOption(option)}
                key={option.asset_id}
              >
                <Image
                  src={option.url ? option.url : '/Crypto.svg'}
                  width={16}
                  height={16}
                  alt="Crypto logo"
                  style={{ marginRight: 8 }}
                />
                {option.name}
                <span className={styles.abrev}>{option.asset_id}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

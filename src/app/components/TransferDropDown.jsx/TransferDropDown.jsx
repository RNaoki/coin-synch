'use client';

import { useState } from 'react';
import styles from './TransferDropDown.module.css';
import Image from 'next/image';

export default function TransferDropDown({ setFormData, options }) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(options[0]);

  const selectOption = (option) => {
    setValue(option);
    setFormData(option);
    setExpanded(false);
  };

  return (
    <div>
      <div
        className={styles.container}
        style={{ position: 'relative' }}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {value}
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
                key={option}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

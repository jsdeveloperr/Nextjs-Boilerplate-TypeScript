import React from 'react';

import styles from './button.module.scss';
import { IButton } from '@/ts/interfaces';

const Button: React.FC<IButton> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      className={styles.title}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

'use client'

import { useState } from 'react';
import styles from './Hamburger.module.css';

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Hamburger({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <div onClick={toggleMenu} className={styles.hamburger + (isOpen ? ' ' + styles.open : '')}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};
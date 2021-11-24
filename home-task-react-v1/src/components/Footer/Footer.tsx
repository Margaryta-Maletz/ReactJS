import React from 'react';
import { LogoIcon } from '../LogoIcon';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={`wrapper ${styles.footer}`}>
            <LogoIcon />
        </footer>
    )
}

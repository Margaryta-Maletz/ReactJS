import React from 'react';
import { LogoIcon } from '../LogoIcon';
import { SearchInput } from '../SearchInput';
import styles from './Header.module.css';
import { AddMovie } from "../AddMovie";
import useToggle from "../UseToggle";

export const Header = () => {
    const [visibleAddMovie, toggleVisible] = useToggle(false);

    return (
        <>
            <header className={`wrapper ${styles.header}`}>
                <LogoIcon />
                <button className={styles.addMovie} onClick={toggleVisible}>
                    + add movie
                </button>
                <SearchInput />
            </header>
            {visibleAddMovie && <AddMovie setVisibleAddMovie={toggleVisible}/>}
        </>
    )
}

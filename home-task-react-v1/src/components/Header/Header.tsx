import React from 'react';
import { LogoIcon } from '../LogoIcon';
import { SearchInput } from '../SearchInput';
import './Header.css';
import backgroundImage from '../../assets/background-header.jpg';
import { AddMovie } from "../AddMovie";
import useToggle from "../UseToggle";
import {useLocation} from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const backgroundStyle = {
        backgroundImage: 'url(' + backgroundImage + ')',
    }

    const [visibleAddMovie, toggleVisible] = useToggle(false);

    if (location.search.includes('movieID')) { return null };
    return (
        <>
            <header className='header wrapper' style={ backgroundStyle }>
                <LogoIcon />
                <button className='header_add-movie' onClick={toggleVisible}>
                    + add movie
                </button>
                <SearchInput />
            </header>
            {visibleAddMovie && <AddMovie setVisibleAddMovie={toggleVisible}/>}
        </>
    )
}

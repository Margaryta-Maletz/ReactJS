import React from 'react';
import LogoIcon from '../LogoIcon';
import { SearchInput } from '../SearchInput';
import './index.css'

const Header = () => {
    return (
        <header className='header wrapper'>
            <LogoIcon />
            <button className='header_add-movie'>
                + add movie
            </button>
            <SearchInput />
        </header>
    )
}

export default Header;

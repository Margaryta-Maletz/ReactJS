import React from 'react';
import LogoIcon from '../LogoIcon';
import { SearchInput } from '../SearchInput';


const Header = () => {
    return (
        <header>
            <LogoIcon />
            <button className='header_add-movie'>
                + add movie
            </button>
            <SearchInput />
        </header>
    )
}

export default Header;

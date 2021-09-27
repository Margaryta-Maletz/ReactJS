import React from 'react';
import LogoIcon from '../LogoIcon';
import { SearchInput } from '../SearchInput';
import './index.css'
import backgroundImage from '../../assets/background-header.jpg'

const Header = () => {
    const backgroundStyle = {
        backgroundImage: 'url(' + backgroundImage + ')',
    }

    return (
        <header className='header wrapper' style={ backgroundStyle }>
            <LogoIcon />
            <button className='header_add-movie'>
                + add movie
            </button>
            <SearchInput />
        </header>
    )
}

export default Header;

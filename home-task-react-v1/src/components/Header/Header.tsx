import React, {useState} from 'react';
import LogoIcon from '../LogoIcon';
import { SearchInput } from '../SearchInput';
import './Header.css';
import backgroundImage from '../../assets/background-header.jpg';
import { AddMovie } from "../AddMovie";

export const Header = () => {
    const backgroundStyle = {
        backgroundImage: 'url(' + backgroundImage + ')',
    }

    const [visibleAddMovie, setVisibleAddMovie] = useState<boolean>(false);

    const handleClick = () => {
        setVisibleAddMovie(true);
    }
    return (
        <>
            <header className='header wrapper' style={ backgroundStyle }>
                <LogoIcon />
                <button className='header_add-movie' onClick={handleClick}>
                    + add movie
                </button>
                <SearchInput />
            </header>
            {visibleAddMovie && <AddMovie isVisible={visibleAddMovie} setVisible={setVisibleAddMovie}/>}
        </>
    )
}

import React from 'react';
import { LogoIcon } from '../LogoIcon';
import { SearchInput } from '../SearchInput';
import './Header.css';
import backgroundImage from '../../assets/background-header.jpg';
import { AddMovie } from "../AddMovie";
import useToggle from "../UseToggle";
import {useParams} from "react-router-dom";

export const Header = () => {
    const { searchQuery } = useParams();
    const backgroundStyle = {
        backgroundImage: 'url(' + backgroundImage + ')',
    }

    const [visibleAddMovie, toggleVisible] = useToggle(false);

    return (
        <>
            <header className='header wrapper' style={ backgroundStyle }>
                <LogoIcon />
                <button className='header_add-movie' onClick={toggleVisible}>
                    + add movie
                </button>
                <SearchInput searchQuery={searchQuery || ""}/>
            </header>
            {visibleAddMovie && <AddMovie setVisibleAddMovie={toggleVisible}/>}
        </>
    )
}

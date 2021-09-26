import React from 'react';
import { GenreToggle } from '../GenreToggle';
import {ResultsSort} from '../ResultsSort';
import { ResultCount } from '../ResultCount';
import { CardPosterList } from '../CardPosterList';

const Main = () => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'crime'];
    const sortList = ['Release Date', 'title', 'genre'];

    return (
        <main>
            <GenreToggle genres = { genres } />
            <ResultsSort sort = { sortList } />
            <ResultCount>
                <span>49</span>
            </ResultCount>
            <CardPosterList />
        </main>
    )
}

export default Main;

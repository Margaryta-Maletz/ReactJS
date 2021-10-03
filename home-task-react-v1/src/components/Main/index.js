import React from 'react';
import { GenreToggle } from '../GenreToggle';
import {ResultsSort} from '../ResultsSort';
import { ResultCount } from '../ResultCount';
import { CardPosterList } from '../CardPosterList';
import './index.css';
import ErrorBoundary from "../ErrorBoundary";

const Main = () => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'crime'];
    const sortList = ['Release Date', 'title', 'genre'];

    return (
        <main className='main wrapper'>
            <div className='top-border wrapper'></div>
            <ErrorBoundary>
                <GenreToggle genres = { genres } />
                <ResultsSort sort = { sortList } />
                <ResultCount count='49' />
                <CardPosterList />
            </ErrorBoundary>
        </main>
    )
}

export default Main;

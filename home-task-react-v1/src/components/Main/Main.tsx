import React from 'react';
import { GenreToggle } from '../GenreToggle';
import { ResultsSort } from '../ResultsSort';
import { ResultCount } from '../ResultCount';
import { CardPosterList } from '../CardPosterList';
import './Main.css';
// @ts-ignore
import ErrorBoundary from "../ErrorBoundary";

export const Main = () => {
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'crime'];
    const sortList = ['Release Date', 'title', 'genre'];
    const count = 49;

    return (
        <main className='main wrapper'>
            <div className='top-border wrapper'/>
            <ErrorBoundary>
                <GenreToggle genres = { genres } />
                <ResultsSort sortList = { sortList } />
                <ResultCount count={ count.toString() } />
               {/* <CardPosterList />*/}
            </ErrorBoundary>
        </main>
    )
}

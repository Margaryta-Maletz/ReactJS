import React from 'react';
import { GenreToggle } from '../GenreToggle';
import { ResultsSort } from '../ResultsSort';
import { ResultCount } from '../ResultCount';
import { CardPosterList } from '../CardPosterList';
import './Main.css';
// @ts-ignore
import ErrorBoundary from "../ErrorBoundary";
import { useSelector } from "react-redux";
import { IState } from "../../store/types";
import { genres } from "../../consts";

export const Main = () => {
    const { movies } = useSelector((state: IState) => state);
    const sortList = ['Release Date', 'title', 'genre'];
    const count = movies.length;

    return (
        <main className='main wrapper'>
            <div className='top-border wrapper'/>
            <ErrorBoundary>
                <GenreToggle />
                <ResultsSort sortList = { sortList } />
                <ResultCount count={ count.toString() } />
                <CardPosterList />
            </ErrorBoundary>
        </main>
    )
}

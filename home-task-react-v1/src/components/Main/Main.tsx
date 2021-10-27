import React from 'react';
import { GenreToggle } from '../GenreToggle';
import { ResultsSort } from '../ResultsSort';
import { ResultCount } from '../ResultCount';
import { CardPosterList } from '../CardPosterList';
import './Main.css';
import { useSelector } from "react-redux";
import { IState } from "../../store/types";
// @ts-ignore
import ErrorBoundary from "../ErrorBoundary";

export const Main = () => {
    const { movies } = useSelector((state: IState) => state);
    const count = movies.length;

    return (
        <main className='main wrapper'>
            <div className='top-border wrapper'/>
            <ErrorBoundary>
                <GenreToggle />
                <ResultsSort />
                <ResultCount count={ count.toString() } />
                <CardPosterList />
            </ErrorBoundary>
        </main>
    )
}

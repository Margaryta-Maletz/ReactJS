import React, {useEffect} from 'react';
import { GenreToggle } from '../GenreToggle';
import { ResultsSort } from '../ResultsSort';
import { ResultCount } from '../ResultCount';
import { CardPosterList } from '../CardPosterList';
import styles from './Main.module.css';
/*import {useDispatch, useSelector} from "react-redux";*/
import {IMovie} from "../../store/types";
// @ts-ignore
/*import ErrorBoundary from "../ErrorBoundary";*/
/*import {useHistory, useLocation, useParams} from "react-router-dom";
import {Genre, genres, SortList, sortListItems} from "../../consts";
import {fetchMovies, getMoviesStart, setActiveGenre, setSearchString, setSortItem} from "../../store/slice";*/
interface MainProps {
    totalAmount: number,
    movies: IMovie[],
}
export const Main:React.FC<MainProps> = ({totalAmount, movies}) => {
/*    const { activeGenre, sortItem, editMovieList } = useSelector((state: IState) => state);
    const { totalAmount } = useSelector((state: IState) => state);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { searchQuery = '' } = useParams<{searchQuery?: string}>();*/

    useEffect(() => {
/*        const params = new URLSearchParams(location.search);
        const sortBy = params.get('sortBy');
        const genre = params.get('genre');
        genre && genres.includes(genre as Genre) ? dispatch(setActiveGenre(genre)) : params.delete('genre');
        sortBy && sortListItems.includes(sortBy as SortList) ? dispatch(setSortItem(sortBy)) : params.delete('sortBy');
        dispatch(setSearchString(searchQuery));
        params && history.push(`?${params.toString()}`);*/
    }, []);

/*    useEffect(() => {
        dispatch(getMoviesStart());
        dispatch(fetchMovies());
    }, [activeGenre, sortItem, editMovieList]);*/

    return (
        <main className={`wrapper ${styles.main}`}>
            <div className={`wrapper ${styles.topBorder}`}/>
            <GenreToggle />
            <ResultsSort sortItem={''}/>
            <ResultCount count={ totalAmount.toString() } />
            <CardPosterList movies={movies}/>
        </main>
    )
}

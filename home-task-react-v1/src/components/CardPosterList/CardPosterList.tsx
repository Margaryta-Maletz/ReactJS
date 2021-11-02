import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardPoster } from '../CardPoster';
import './CardPosterList.css';
import {fetchMovies, getMoviesStart} from '../../store/slice';
import { IState } from '../../store/types';

export const CardPosterList: React.FC = () => {

    const dispatch = useDispatch();
    const { movies, activeGenre, sortItem, editMovieList } = useSelector((state: IState) => state);

    useEffect(() => {
        dispatch(getMoviesStart());
        dispatch(fetchMovies());
    }, [activeGenre, sortItem, editMovieList]);

    return (
        <div className="card-poster-list_wrapper">
            { movies.map((item) =>
                <CardPoster key={item.id.toString()} { ...item } />
            )}
        </div>
    )
}

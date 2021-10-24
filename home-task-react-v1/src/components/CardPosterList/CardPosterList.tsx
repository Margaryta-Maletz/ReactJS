import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CardPoster } from '../CardPoster';
import { CardPosterProp } from '../EditButton';
import { getMovies } from '../../store/actionCreators';
import { store, AppDispatch, RootState } from '../../store/store';
import { useAppSelector, useAppDispatch } from '../App/hooks'
import './CardPosterList.css';

interface Props {
    movies: CardPosterProp[];
    getMovies: () => void;
}

export const CardPosterListComponent: React.FC<Props> = ({ movies, getMovies }) => {
/*    const cardList: CardPosterProp[] = [
        {
            imagePath: 'images/posters/poster1.jpg',
            imageAlt: 'poster Pulp Fiction',
            title: 'Pulp Fiction',
            genre: 'Action & Adventure',
            releaseDate: 2004,
        },
        {
            imagePath: 'images/posters/poster2.jpg',
            imageAlt: 'poster Bohemian Rhapsody',
            title: 'Bohemian Rhapsody',
            genre: 'Drama, Biography, Music',
            releaseDate: 2003,
        },
        {
            imagePath: 'images/posters/poster3.jpg',
            imageAlt: 'poster Kill Bill: Vol 2',
            title: 'Kill Bill: Vol 2',
            genre: 'Oscar winning Movie',
            releaseDate: 1994,
        },
        {
            imagePath: 'images/posters/poster4.jpg',
            imageAlt: 'poster Avengers: War of Infinity',
            title: 'Avengers: War of Infinity',
            genre: 'Action & Adventure',
            releaseDate: 2004,
        },
        {
            imagePath: 'images/posters/poster5.jpg',
            imageAlt: 'poster Inception',
            title: 'Inception',
            genre: 'Action & Adventure',
            releaseDate: 2003,
        },
        {
            imagePath: 'images/posters/poster6.jpg',
            imageAlt: 'poster Reservoir dogs',
            title: 'Reservoir dogs',
            genre: 'Oscar winning Movie',
            releaseDate: 1994,
        },
    ]*/
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="card-poster-list_wrapper">
            { movies.map((item) =>
                <CardPoster { ...item } />
            )}
        </div>
    )
}

function mapStateToProps(state: RootState) {
    const { movies: { movies, loading, error } } = state;

    return { movies };
}

function mapDispatchToProps(dispatch: AppDispatch) {
    return {
        getMovies: (genre: string = '', sort: string = '') => dispatch(getMovies(genre, sort)),
    };
}

export const CardPosterList = connect(mapStateToProps, mapDispatchToProps)(CardPosterListComponent);

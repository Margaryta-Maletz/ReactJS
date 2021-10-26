import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CardPoster } from '../CardPoster';
import { CardPosterProp } from '../EditButton';
// import { useAppSelector, useAppDispatch } from '../App/hooks'
import './CardPosterList.css';

interface Props {
    movies: CardPosterProp[];
    getMovies: () => void;
}

export const CardPosterList: React.FC<Props> = ({ movies, getMovies }) => {
    useEffect(() => {
        // getMovies();
    }, []);

    return (
        <div className="card-poster-list_wrapper">
            { movies.map((item) =>
                <CardPoster { ...item } />
            )}
        </div>
    )
}

/*function mapStateToProps(state: RootState) {
    const { movies: { movies, loading, error } } = state;

    return { movies };
}

function mapDispatchToProps(dispatch: AppDispatch) {
    return {
        getMovies: (genre: string[] = [], sort: string = '') => dispatch(getMovies(genre, sort)),
    };
}

export const CardPosterList = connect(mapStateToProps, mapDispatchToProps)(CardPosterListComponent);*/

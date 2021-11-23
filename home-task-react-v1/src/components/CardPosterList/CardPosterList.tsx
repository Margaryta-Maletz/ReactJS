import React from 'react';
import { CardPoster } from '../CardPoster';
import { IMovie } from '../../store/types';
import './CardPosterList.css'

interface CardPosterListProps {
    movies: IMovie[];
}

export const CardPosterList: React.FC<CardPosterListProps> = (props) => {
    const { movies } = props;

    return (
        <div className="card-poster-list_wrapper">
            { movies.map((item) =>
                <CardPoster key={item.id.toString()} { ...item } />
            )}
        </div>
    )
}

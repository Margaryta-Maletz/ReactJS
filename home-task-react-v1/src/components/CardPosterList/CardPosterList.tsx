import React from 'react';
import { useSelector } from 'react-redux';
import { CardPoster } from '../CardPoster';
import './CardPosterList.css';
import { IState } from '../../store/types';

export const CardPosterList: React.FC = () => {
    const { movies } = useSelector((state: IState) => state);

    return (
        <div className="card-poster-list_wrapper">
            { movies.map((item) =>
                <CardPoster key={item.id.toString()} { ...item } />
            )}
        </div>
    )
}

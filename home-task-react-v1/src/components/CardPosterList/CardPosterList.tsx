import React from 'react';
import { CardPoster } from '../CardPoster';
import { IMovie } from '../../store/types';
import styles from './CardPosterList.module.css'

interface CardPosterListProps {
    movies: IMovie[];
}

export const CardPosterList: React.FC<CardPosterListProps> = (props) => {
    const { movies } = props;

    return (
        <div className={styles.wrapper}>
            { movies.map((item) =>
                <CardPoster key={item.id.toString()} { ...item } />
            )}
        </div>
    )
}

import React from 'react';
import styles from './DetailsMovie.module.css';
import { LogoIcon } from '../LogoIcon';
import { SearchIcon } from "../SearchIcon";
import {IMovie} from "../../store/types";
import Router from 'next/router'

interface DetailsMovieProps {
    movie: IMovie
}

export const DetailsMovie: React.FC<DetailsMovieProps> = ({movie}) => {
    return (
        <div className={`wrapper ${styles.wrapper}`}>
            <LogoIcon />
            <div className={styles.close} onClick={() => Router.back()}>
                <SearchIcon />
            </div>
            <div className={styles.wrapperCard}>
                <img src={ movie?.poster_path } alt={ movie?.tagline } width="322" height="486" />
                <div className={styles.wrapperContext}>
                    <label className={styles.title}>{movie?.title}</label>
                    <label className={styles.rating}>{movie?.vote_average.toString(10)}</label>
                    <label className={styles.genre}>{movie?.genres.join(' & ')}</label>
                    <label className={styles.label}>{movie?.release_date}</label>
                    <label className={styles.label}>{movie?.runtime?.toString()}</label>
                    <textarea className={styles.textarea} readOnly={true}>{movie?.overview}</textarea>
                </div>
            </div>
        </div>
    )
}

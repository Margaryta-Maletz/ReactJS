import React from 'react';
/*import {useSelector} from 'react-redux';*/
import styles from './DetailsMovie.module.css';
import { LogoIcon } from '../LogoIcon';
import { SearchIcon } from "../SearchIcon";
/*import {IState} from '../../store/types';
import {useHistory, useLocation} from "react-router-dom";*/
import Link from 'next/link';
import {IMovie} from "../../store/types";
interface DetailsMovieProps {
    movie: IMovie
}
export const DetailsMovie: React.FC<DetailsMovieProps> = ({movie}) => {
/*    const history = useHistory();
    const { movies } = useSelector((state: IState) => state);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const movie = movies.find(value => value.id === Number(params.get('movie')));*/

/*    const handleOnClick = () => {
        params.delete('movie');
        params && history.push(`?${params.toString()}`);
    }*/

/*    if (!movie) { return null }*/
    return (
        <div className={`wrapper ${styles.wrapper}`}>
            <LogoIcon />
            <Link href={"/search"}>
                <div className={styles.close} >
                    <SearchIcon />
                </div>
            </Link>
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

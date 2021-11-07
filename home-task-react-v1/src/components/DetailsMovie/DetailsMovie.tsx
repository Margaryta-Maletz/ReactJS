import React from 'react';
import { useSelector } from 'react-redux';
import './DetailsMovie.css';
import { LogoIcon } from '../LogoIcon';
import { SearchIcon } from "../SearchIcon";
import {IState} from '../../store/types';
import { Link, useParams } from "react-router-dom";

export const DetailsMovie: React.FC = () => {
    const { movies } = useSelector((state: IState) => state);
    const { movieID } = useParams();
    const activeMovie = movies.find(value => value.id === Number(movieID));

    return (
        <div className="wrapper-details_movie wrapper">
            <LogoIcon />
            <Link to="/" className="add_movie-close">
                <SearchIcon />
            </Link>
            <div className="wrapper-details_movie-card">
                <img className='details-movie_image card-poster_image' src={ activeMovie?.poster_path } alt={ activeMovie?.tagline } width="322" height="486" />
                <div className="wrapper-details_movie-context">
                    <label className="details_movie-title">{activeMovie?.title}</label>
                    <label className="details_movie-rating add_movie-label-second_column">{activeMovie?.vote_average.toString()}</label>
                    <label className="details_movie-genre card-poster_genre">{activeMovie?.genres.join(' & ')}</label>
                    <label className="add_movie-label">{activeMovie?.release_date}</label>
                    <label className="add_movie-label add_movie-label-second_column">{activeMovie?.runtime?.toString()}</label>
                    <textarea className="details_movie-textarea" readOnly={true}>{activeMovie?.overview}</textarea>
                </div>
            </div>
        </div>
    )
}

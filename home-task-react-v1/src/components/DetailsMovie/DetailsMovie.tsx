import React from 'react';
import {useSelector} from 'react-redux';
import './DetailsMovie.css';
import { LogoIcon } from '../LogoIcon';
import { SearchIcon } from "../SearchIcon";
import {IState} from '../../store/types';
import {useHistory, useLocation} from "react-router-dom";

export const DetailsMovie: React.FC = () => {
    const history = useHistory();
    const { movies } = useSelector((state: IState) => state);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeMovie = movies.find(value => value.id === Number(params.get('movieID')));
    if (!activeMovie) { return null };
    return (
        <div className="wrapper-details_movie wrapper">
            <LogoIcon />
            <div className="add_movie-close" onClick={() => history.push(location.pathname)}>
                <SearchIcon />
            </div>
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DetailsMovie.css';
import { LogoIcon } from '../LogoIcon';
import { SearchIcon } from "../SearchIcon";
import {IMovie, IState} from '../../store/types';

type DetailsMovieProps = {
    movie?: IMovie,
    setVisible: (value: boolean) => void,
}

export const DetailsMovie: React.FC<DetailsMovieProps> = (props) => {

    const handleChangeVisible = () => {
        props.setVisible(false);
    }

    return (
        <div className="wrapper-details_movie wrapper">
            <LogoIcon />
            <div className="add_movie-close" onClick={handleChangeVisible}>
                <SearchIcon />
            </div>
            <div className="wrapper-details_movie-card">
                <img className='details-movie_image card-poster_image' src={ props?.movie?.poster_path } alt={ props?.movie?.tagline } />
                <div className="wrapper-details_movie-context">
                    <label className="details_movie-title">{props.movie?.title}</label>
                    <label className="details_movie-rating add_movie-label-second_column">{props.movie?.vote_average.toString()}</label>
                    <label className="details_movie-genre card-poster_genre">{props.movie?.genres.join(' & ')}</label>
                    <label className="add_movie-label">{props.movie?.release_date}</label>
                    <label className="add_movie-label add_movie-label-second_column">{props.movie?.runtime?.toString()}</label>
                    <textarea className="details_movie-textarea" readOnly={true}>{props.movie?.overview}</textarea>
                </div>
            </div>
        </div>
    )
}

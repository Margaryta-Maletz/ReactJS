import React from 'react';
import './DetailsMovie.css';
import { LogoIcon } from '../LogoIcon';
import { SearchIcon } from "../SearchIcon";
import { CardPosterProp } from "../EditButton";

type DetailsMovieProps = {
    movie?: CardPosterProp,
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
                <img className='details-movie_image card-poster_image' src={ props?.movie?.imagePath ?? 'images/posters/poster1.jpg' } alt={ props?.movie?.imageAlt ?? 'poster Pulp Fiction' } />
                <div className="wrapper-details_movie-context">
                    <label className="details_movie-title">{props.movie?.title ?? "Movie title"}</label>
                    <label className="details_movie-rating add_movie-label-second_column">{props.movie?.rating?.toString() ?? "7.8"}</label>
                    <label className="details_movie-genre card-poster_genre">{props.movie?.genre ?? ""}</label>
                    <label className="add_movie-label">{props.movie?.releaseDate?.toString() ?? '2021'}</label>
                    <label className="add_movie-label add_movie-label-second_column">{props.movie?.runtime?.toString() ?? "minutes"}</label>
                    <textarea className="details_movie-textarea" readOnly={true}>{props.movie?.overview ?? "Movie description"}</textarea>
                </div>
            </div>
        </div>
    )
}

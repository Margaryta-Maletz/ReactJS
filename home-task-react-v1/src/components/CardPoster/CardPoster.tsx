import React from 'react';
import './CardPoster.css';
import { EditButton, CardPosterProp } from "../EditButton";

export const CardPoster: React.FC<CardPosterProp> = (props) => {
    return (
        <div className='card-poster_wrapper'>
            <img className='card-poster_image' src={ props?.imagePath ?? 'images/posters/poster1.jpg' } alt={ props?.imageAlt ?? 'poster Pulp Fiction' } />
            <EditButton cards={props}/>
            <h4 className='card-poster_title'>{ props?.title ?? 'Pulp Fiction' }</h4>
            <p className='card-poster_release-date'>{ props?.releaseDate ?? '2004' }</p>
            <p className='card-poster_genre'>{ props?.genre ?? 'Action & Adventure' }</p>
        </div>
    )
}

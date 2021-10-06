import React from 'react';
import './CardPoster.css';
import { EditButton } from "../EditButton";

export const CardPoster = (props) => {
    return (
        <div className='card-poster_wrapper'>
            <img className='card-poster_image' src={ props.cards?.imagePath ?? 'images/posters/poster1.jpg' } alt={ props.cards?.imageAlt ?? 'poster Pulp Fiction' } />
            <EditButton card={props.cards}/>
            <h4 className='card-poster_title'>{ props.cards?.title ?? 'Pulp Fiction' }</h4>
            <p className='card-poster_release-date'>{ props.cards?.releaseDate ?? '2004' }</p>
            <p className='card-poster_genre'>{ props.cards?.genre ?? 'Action & Adventure' }</p>
        </div>
    )
}

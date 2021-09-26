import React from 'react';

export const CardPoster = (props) => {
    return (
        <div className='card-poster_wrapper'>
            <img className='card-poster_image' src={ props.cards.imagePath } alt={ props.cards.imageAlt } />
            <h4 className='card-poster_title'>{ props.cards.title }</h4>
            <p className='card-poster_genre'>{ props.cards.genre }</p>
            <p className='card-poster_release-date'>{ props.cards.releaseDate }</p>
        </div>
    )
}

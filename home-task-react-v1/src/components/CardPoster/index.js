import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const CardPoster = (props) => {
    return (
        <div className='card-poster_wrapper'>
            <img className='card-poster_image' src={ props.cards.imagePath } alt={ props.cards.imageAlt } />
            <h4 className='card-poster_title'>{ props.cards.title }</h4>
            <p className='card-poster_release-date'>{ props.cards.releaseDate }</p>
            <p className='card-poster_genre'>{ props.cards.genre }</p>
        </div>
    )
}

CardPoster.propTypes = {
    cards: {
        imagePath: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
    }
}

CardPoster.defaultProps = {
    cards: {
        imagePath: 'images/posters/poster1.jpg',
        imageAlt: 'poster Pulp Fiction',
        title: 'Pulp Fiction',
        genre: 'Action & Adventure',
        releaseDate: 2004,
    }
}

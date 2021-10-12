import React, {useState} from 'react';
import './CardPoster.css';
import { EditButton, CardPosterProp } from "../EditButton";
import { DetailsMovie } from "../DetailsMovie";

export const CardPoster: React.FC<CardPosterProp> = (props) => {
    const [visibleDetailsMovie, setVisibleDetailsMovie] = useState<boolean>(false);
    const handleClick = () => {
        setVisibleDetailsMovie(true);
    }

    return (
        <>
            {visibleDetailsMovie && <DetailsMovie isVisible={ visibleDetailsMovie } setVisible={ setVisibleDetailsMovie } movie={ props }/>}
            <div className='card-poster_wrapper' onClick={ handleClick }>
                <img className='card-poster_image' src={ props?.imagePath ?? 'images/posters/poster1.jpg' } alt={ props?.imageAlt ?? 'poster Pulp Fiction' } />
                <EditButton { ...props }/>
                <h4 className='card-poster_title'>{ props?.title ?? 'Pulp Fiction' }</h4>
                <p className='card-poster_release-date'>{ props?.releaseDate ?? '2004' }</p>
                <p className='card-poster_genre'>{ props?.genre ?? 'Action & Adventure' }</p>
            </div>
        </>
    )
}

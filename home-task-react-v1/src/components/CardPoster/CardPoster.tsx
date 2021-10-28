import React, { useState } from 'react';
import './CardPoster.css';
import { EditButton} from "../EditButton";
import { DetailsMovie } from "../DetailsMovie";
import {IMovie, IState} from '../../store/types';

export const CardPoster: React.FC<IMovie> = (props) => {
    const [visibleDetailsMovie, setVisibleDetailsMovie] = useState<boolean>(false);
    const handleClick = () => {
        setVisibleDetailsMovie(true);
    }

    return (
        <>
            {visibleDetailsMovie && <DetailsMovie setVisible={ setVisibleDetailsMovie } movie={ props }/>}
            <div className='card-poster_wrapper'>
                <img className='card-poster_image' src={ props?.poster_path } alt={ props?.tagline}  width="322" height="455" onClick={ handleClick }/>
                <EditButton { ...props }/>
                <h4 className='card-poster_title'>{ props?.title }</h4>
                <p className='card-poster_release-date'>{ props?.release_date.slice(0, 4) }</p>
                <p className='card-poster_genre'>{ props?.genres.join(' & ') }</p>
            </div>
        </>
    )
}

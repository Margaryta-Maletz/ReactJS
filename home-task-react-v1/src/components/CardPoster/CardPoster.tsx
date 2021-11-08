import React from 'react';
import './CardPoster.css';
import { EditButton} from "../EditButton";
import {useHistory, useLocation} from "react-router-dom";
import { IMovie } from '../../store/types';

export const CardPoster: React.FC<IMovie> = (props) => {
    const history = useHistory();
    const location = useLocation();
    const handleOnClick = () => {
        const params = new URLSearchParams(location.search);
        params.set('movie', props.id.toString());
        params && history.push(`?${params.toString()}`);
    }

    return (
        <div className='card-poster_wrapper'>
            <img className='card-poster_image' src={ props?.poster_path } alt={ props?.tagline}  width="322" height="455" onClick={handleOnClick}/>
            <EditButton { ...props }/>
            <h4 className='card-poster_title'>{ props?.title }</h4>
            <p className='card-poster_release-date'>{ props?.release_date.slice(0, 4) }</p>
            <p className='card-poster_genre'>{ props?.genres.join(' & ') }</p>
        </div>
    )
}

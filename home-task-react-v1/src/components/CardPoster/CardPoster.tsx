import React from 'react';
/*import { EditButton} from "../EditButton";
import {useHistory, useLocation} from "react-router-dom";*/
import { IMovie } from '../../store/types';
import styles from './CardPoster.module.css';
import Link from 'next/link';

export const CardPoster: React.FC<IMovie> = (props) => {
/*    const history = useHistory();
    const location = useLocation();*/
    const handleOnClick = () => {
/*        const params = new URLSearchParams(location.search);
        params.set('movie', props.id.toString());
        params && history.push(`?${params.toString()}`);*/
    }

    return (
        <div className={styles.wrapper}>
            <Link href={`/search/${props.id}`}>
                <img src={ props?.poster_path } alt={ props?.tagline}  width="322" height="455"/>
            </Link>
 {/*           <EditButton { ...props }/>*/}
            <h4 className={styles.title}>{ props?.title }</h4>
            <p className={styles.date}>{ props?.release_date.slice(0, 4) }</p>
            <p className={styles.genre}>{ props?.genres.join(' & ') }</p>
        </div>
    )
}

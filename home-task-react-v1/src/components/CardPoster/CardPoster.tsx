import React from 'react';
import { EditButton} from "../EditButton";
import { IMovie } from '../../store/types';
import styles from './CardPoster.module.css';
import Link from 'next/link';

export const CardPoster: React.FC<IMovie> = (props) => {
    return (
        <div className={styles.wrapper}>
            <Link href={`/movies/${props.id}`}>
                <img src={ props?.poster_path } alt={ props?.tagline}  width="322" height="455"/>
            </Link>
{/*            <EditButton { ...props }/>*/}
            <h4 className={styles.title}>{ props?.title }</h4>
            <p className={styles.date}>{ props?.release_date.slice(0, 4) }</p>
            <p className={styles.genre}>{ props?.genres.join(' & ') }</p>
        </div>
    )
}

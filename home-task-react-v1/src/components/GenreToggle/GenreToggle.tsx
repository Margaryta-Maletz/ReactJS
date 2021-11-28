import React from "react";
import styles from './GenreToggle.module.css';
import { GenreItem } from '../GenreItem';

const genres = [
    'action',
    'adventure',
    'animation',
    'comedy',
    'drama',
    'family',
    'fantasy',
];

export const GenreToggle: React.FC = () => {

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <GenreItem key='All' value={''} title={'All'}/>
                {genres.map((elem) => (
                    <GenreItem key={elem} value={elem}/>
                ))}
            </ul>
        </div>
    )
}

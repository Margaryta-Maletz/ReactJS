import React from "react";
import './GenreToggle.css';
import { GenreItem } from '../GenreItem';
/*import { genres } from "../../consts";*/

const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Drama',
    'Family',
    'Fantasy',
];

export const GenreToggle: React.FC = () => {
    return (
        <div className='genre-toggle_wrapper'>
            <ul className='genres_list'>
                <GenreItem key='All' value={null} title={'All'} />
                {genres.map((elem) => (
                    <GenreItem key={elem} value={elem} />
                ))}
            </ul>
        </div>
    )
}

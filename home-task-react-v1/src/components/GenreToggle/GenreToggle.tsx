import React, {useEffect} from "react";
import './GenreToggle.css';
import { GenreItem } from '../GenreItem';
import { genres } from "../../consts";

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

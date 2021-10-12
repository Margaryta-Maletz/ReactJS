import React from "react";
import './CenreToggle.css';

type GenreToggleProp = {
    genres: string[],
}

export const GenreToggle: React.FC<GenreToggleProp> = ({ genres }) => {
    const addActive = (e: React.MouseEvent<HTMLElement>) => {
        const list = document.querySelectorAll('.genre_item');
        list?.forEach( (elem) => (
            e.target === elem ? elem.classList.add('active')
                : elem.classList.remove('active')
        ))
    }

    return (
        <div className='genre-toggle_wrapper'>
            <ul className='genres_list'>
                {genres.map((elem, i) => (
                    i ? <li className='genre_item' onClick={addActive}>{elem}</li>
                        : <li className='genre_item active' onClick={addActive}>{elem}</li>
                ))}
            </ul>
        </div>
    )
}

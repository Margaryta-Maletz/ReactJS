import React from "react";
import './index.css';

export const GenreToggle = (props) => {
    const addActive = (e) => {
        const list = document.getElementsByClassName('genre_item');
        [].map.call(list, (elem) => (
            e.target === elem ? elem.classList.add('active')
                : elem.classList.remove('active')
        ))
    }

    return (
        <div className='genre-toggle_wrapper'>
            <ul className='genres_list'>
                {props.genres.map((elem, i) => (
                    i ? <li className='genre_item' onClick={addActive}>{elem}</li>
                        : <li className='genre_item active' onClick={addActive}>{elem}</li>
                ))}
            </ul>
        </div>
    )
}

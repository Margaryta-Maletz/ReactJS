import React from 'react';
import './index.css';

export const SearchInput = () => {
    return (
        <div className="search-input_wrapper">
            <h3 className='search-input_header'>Find your movie</h3>
            <input className='search-input_input' placeholder='What do you want to watch?'></input>
            <button className='search-input_button'>search</button>
        </div>
    )
}

import React from "react";
import './index.css';

export const SearchInput = () => {
    return (
        <div className="search-input_wrapper">
            <input className='search-input_input' placeholder='What do you want to watch?'></input>
            <button className='search-input_button'>search</button>
        </div>
    )
}

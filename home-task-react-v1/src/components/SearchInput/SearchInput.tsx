import React, {useEffect} from 'react';
import './SearchInput.css';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setSearchString, setEditMovieList} from '../../store/slice';

export const SearchInput: React.FC<{searchQuery: string}> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { searchString } = useSelector((state: IState) => state);
    const handleChangeSearchString = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchString(e.target.value));
    }

    useEffect(() => {
        const searchQuery = props.searchQuery || "";
        dispatch(setSearchString(searchQuery)) && dispatch(setEditMovieList(true));
    }, []);

    const handleOnClick = () => {
        history.push(`/search/${searchString}`);
        dispatch(setEditMovieList(true));
    }

    return (
        <div className="search-input_wrapper">
            <h3 className='search-input_header'>Find your movie</h3>
            <input className='search-input_input' placeholder='What do you want to watch?' value={searchString} onChange={handleChangeSearchString} onKeyDown={(e) => (e.code === 'Enter' && handleOnClick())   }/>
            <button className='search-input_button' onClick={handleOnClick}> search </button>
        </div>
    )
}

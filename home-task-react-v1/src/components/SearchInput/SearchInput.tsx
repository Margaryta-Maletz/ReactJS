import React, {memo} from 'react';
import styles from './SearchInput.module.css';
import {useHistory, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setSearchString, setEditMovieList} from '../../store/slice';

export const SearchInput: React.FC = memo(() => {
/*    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const { searchString } = useSelector((state: IState) => state);*/
    const handleChangeSearchString = (e: React.ChangeEvent<HTMLInputElement>) => {
/*        dispatch(setSearchString(e.target.value));*/
    }

    const handleOnClick = () => {
/*        params ? history.push(`/search/${searchString}?${params}`) : history.push(`/search/${searchString}`);
        dispatch(setEditMovieList(true));*/
    }

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.header}>Find your movie</h3>
            <input className={styles.input} placeholder='What do you want to watch?' value={""} onChange={handleChangeSearchString} onKeyDown={(e) => (e.code === 'Enter' && handleOnClick())   }/>
            <button className={styles.button} onClick={handleOnClick}> search </button>
        </div>
    )
})

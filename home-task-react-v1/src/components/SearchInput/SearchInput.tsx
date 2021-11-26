import React, {memo, useEffect, useState} from 'react';
import styles from './SearchInput.module.css';
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setSearchString, setEditMovieList} from '../../store/slice';
import {useLocation} from "react-router";
import {useRouter} from 'next/router'

export const SearchInput: React.FC = memo(() => {
    const [searchString, setSearchString] = useState('');
    const router = useRouter();
    const patch = router.asPath;
    const searchParam = patch.match(/((?<=\/search\/).*(?=\?))|(?<=\/search\/).*/g)?.toString() || '';
    const param = patch.match(/\?.*/i);

    const handleChangeSearchString = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    };

    useEffect(() => {
        setSearchString(searchParam);
    }, []);

    const handleOnClick = () => {
        param ? router.push(`/search/${searchString}${param}`) : router.push(`/search/${searchString}`);
    }

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.header}>Find your movie</h3>
            <input className={styles.input} placeholder='What do you want to watch?' value={searchString} onChange={handleChangeSearchString} onKeyDown={(e) => (e.code === 'Enter' && handleOnClick())   }/>
            <button className={styles.button} onClick={handleOnClick}> search </button>
        </div>
    )
})

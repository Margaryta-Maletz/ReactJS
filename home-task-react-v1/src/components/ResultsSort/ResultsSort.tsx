import React, {useEffect} from 'react';
import './ResultsSort.css';
import {Genre, genres, sortList} from '../../consts';
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setActiveGenre, setSortItem} from "../../store/slice";
import {useHistory, useLocation} from "react-router-dom";

export const ResultsSort: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { sortItem } = useSelector((state: IState) => state);
    const params = new URLSearchParams(location.search);

    useEffect(() => {
        const sortBy = params.get('sortBy');
        const genre = params.get('genre');
        genre && genres.includes(genre as Genre) ? dispatch(setActiveGenre(genre)) : params.delete('genre');
        sortBy ? dispatch(setSortItem(sortBy)) : params.set('sortBy', sortItem);
        params && history.push(`?${params.toString()}`);
    }, []);

    const handleSortItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortItem(e.target.value));
        params.set('sortBy', e.target.value);
        params && history.push(`?${params.toString()}`);
    }

    return (
        <>
            <label className='results-sort_header'>
                sort by
                <select className='results-sort_list' value={sortItem} onChange={handleSortItem}>
                    {sortList.map((elem) => (
                        <option key={elem.id} value={elem.id} className='result-sort-item'>{elem.value}</option>
                    ))}
                </select>
            </label>
        </>
    )
}

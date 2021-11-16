import React from 'react';
import './ResultsSort.css';
import {sortList} from '../../consts';
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setSortItem} from "../../store/slice";
import {useHistory, useLocation} from "react-router-dom";

export const ResultsSort: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { sortItem } = useSelector((state: IState) => state);
    const params = new URLSearchParams(location.search);

    const handleSortItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortItem(e.target.value));
        e.target.value
            ? params.set('sortBy', e.target.value)
            : params.delete('sortBy');
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

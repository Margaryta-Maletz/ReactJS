import React from 'react';
import styles from './ResultsSort.module.css';
/*import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setSortItem} from "../../store/slice";
import {useHistory, useLocation} from "react-router-dom";*/

const sortList = [
    {id: "", value:'rating'},
    {id: "release_date", value:'Release Date'},
    {id: "title", value:'Title'},
    {id: "genre", value:'Genre'},
];

interface ResultsSortProps {
    sortItem: string;
}

export const ResultsSort: React.FC<ResultsSortProps> = ({sortItem}) => {
/*    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { sortItem } = useSelector((state: IState) => state);
    const params = new URLSearchParams(location.search);*/

    const handleSortItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
/*        dispatch(setSortItem(e.target.value));
        e.target.value
            ? params.set('sortBy', e.target.value)
            : params.delete('sortBy');
        params && history.push(`?${params.toString()}`);*/
    }

    return (
        <>
            <label className={styles.header}>
                sort by
                <select className={styles.list} value={sortItem} onChange={handleSortItem}>
                    {sortList.map((elem) => (
                        <option key={elem.id} value={elem.id} className={styles.item}>{elem.value}</option>
                    ))}
                </select>
            </label>
        </>
    )
}

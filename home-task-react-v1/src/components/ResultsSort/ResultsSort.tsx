import React from 'react';
import styles from './ResultsSort.module.css';
import {useRouter} from "next/router";
import {getSearchParam} from "../SearchInput/SearchInput";


const sortList = [
    {id: "", value:'rating'},
    {id: "release_date", value:'Release Date'},
    {id: "title", value:'Title'},
    {id: "genre", value:'Genre'},
];

const getActiveSortItem = (patch: string) => {
    return patch?.match(/(?<=sortBy=).*(?=&)|(?<=sortBy=).*/ig)?.toString() || '';
}

export const ResultsSort: React.FC = () => {
    const router = useRouter();
    const patch = router.asPath;
    const searchParam = getSearchParam(patch);
    let param = patch.match(/\?.*/i)?.toString() || '';
    const activeSortItem = getActiveSortItem(patch);

    const handleSortItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sortItem = e.target.value;
        if (sortItem === '') {
            param = param.replace(`sortBy=${activeSortItem}`, '');
            console.log(param);
            param.length === 1
                ? router.push(`/search/${searchParam}`)
                : router.push(`/search/${searchParam}${param.replace('&', '')}`);
        } else {
            param
                ? param.includes('sortBy')
                    ? router.push(`/search/${searchParam}${param.replace(activeSortItem, sortItem)}`)
                    : router.push(`/search/${searchParam}${param}&sortBy=${sortItem}`)
                : router.push(`/search/${searchParam}?sortBy=${sortItem}`);
        }
    }

    return (
        <>
            <label className={styles.header}>
                sort by
                <select className={styles.list} value={activeSortItem} onChange={handleSortItem}>
                    {sortList.map((elem) => (
                        <option key={elem.id} value={elem.id} className={styles.item}>{elem.value}</option>
                    ))}
                </select>
            </label>
        </>
    )
}

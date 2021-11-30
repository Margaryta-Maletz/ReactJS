import React from "react";
import styles from './GenreItem.module.css';
import {useRouter} from 'next/router';
import {getSearchParam} from '../SearchInput/SearchInput';

interface GenreItemProp {
    title?: string;
    value: string;
}

const getActiveGenre = (patch: string) => {
    return patch?.match(/(?<=filter=).*(?=&)|(?<=filter=).*/ig)?.toString() || '';
}

export const GenreItem: React.FC<GenreItemProp> = ({ title, value}) => {
    const router = useRouter();
    const patch = router.asPath;
    const searchParam = getSearchParam(patch);
    let param = patch.match(/\?.*/i)?.toString() || '';
    const activeGenre =getActiveGenre(patch);

    const handleOnClick = (e: React.MouseEvent) => {
        const genre = (e.target as HTMLElement).innerText.toLowerCase();
        if (genre.toString() === 'all') {
            param = param.replace(`filter=${activeGenre}`, '');
            param.length === 1
                ? router.push(`/search/${searchParam}`)
                : router.push(`/search/${searchParam}${param.replace('&', '')}`);
        } else {
            param
                ? param.includes('filter')
                    ? router.push(`/search/${searchParam}${param.replace(activeGenre, genre)}`)
                    : router.push(`/search/${searchParam}${param}&filter=${genre}`)
                : router.push(`/search/${searchParam}?filter=${genre}`);
        }
    }

    return (
        <>
            {value === activeGenre
                ? <li className={`${styles.item} ${styles.active}`}>{title || value}</li>
                : <li className={styles.item} onClick={handleOnClick}>{title || value}</li>}
        </>
    )
}

import React from "react";
/*import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setActiveGenre} from "../../store/slice";*/
import {Genre, genres} from "../../consts";
// import {useHistory, useLocation} from "react-router-dom";

interface GenreItemProp {
    title?: string;
    value: string | null;
}

export const GenreItem: React.FC<GenreItemProp> = ({ title, value }) => {
/*    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const { activeGenre } = useSelector((state: IState) => state);*/

    const handleSelectGenre = () => {
/*        dispatch(setActiveGenre(value));
        const params = new URLSearchParams(location.search);
        value ? params.set('genre', value) : params.delete('genre');
        params && history.push(`?${params.toString()}`);*/
    }

    return (
        <>
            {value === null
                ? <li className='genre_item active'>{title || value}</li>
                : <li className='genre_item' onClick={handleSelectGenre}>{title || value}</li>}
        </>
    )
}

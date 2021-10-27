import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../store/types";
import {setActiveGenre} from "../../store/slice";
import {Genre} from "../../consts";

interface GenreItemProp {
    title?: string;
    value: Genre | null;
}

export const GenreItem: React.FC<GenreItemProp> = ({ title, value }) => {
    const dispatch = useDispatch();
    const { activeGenre } = useSelector((state: IState) => state);

    const handleSelectGenre = () => {
        dispatch(setActiveGenre(value));
    }

    return (
        <>
            {value === activeGenre
                ? <li className='genre_item active'>{title || value}</li>
                : <li className='genre_item' onClick={handleSelectGenre}>{title || value}</li>}
        </>
    )
}

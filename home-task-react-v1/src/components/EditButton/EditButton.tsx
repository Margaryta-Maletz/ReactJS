import React, {useState} from 'react';
import './EditButton.css';
import { AddMovie } from '../AddMovie';
import { MessageForm } from '../MessageForm';
import { CloseButton } from '../CloseButton'
import useToggle from "../UseToggle";
import {EditIcon} from "../EditIcon";


export type CardPosterProp = {
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    genres: string[],
    runtime: number
}

export const EditButton: React.FC<CardPosterProp> = (props) => {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const handleOpenIsMenu = (e: React.MouseEvent) => {
        e.defaultPrevented;
        setIsMenu(true);
    }
    const handleCloseIsMenu = () => {
        setIsMenu(false);
    }

    const [visibleAddMovie, toggleVisible] = useToggle(false);

    const [visibleMessageForm, setVisibleMessageForm] = useState<boolean>(false);
    const handleOpenFormDelete = () => {
        setVisibleMessageForm(true);
    }

    return (
        <>
            {
                isMenu
                    ? <div className="edit-menu">
                        <div className="edit-menu_close" onClick={handleCloseIsMenu}>
                            <CloseButton width={11} height={12}/>
                        </div>
                        <label className="edit-menu_button" onClick={toggleVisible}>Edit</label>
                        <label className="edit-menu_button" onClick={handleOpenFormDelete}>Delete</label>
                    </div>
                    : <div className="edit-button" onClick={handleOpenIsMenu}>
                        <EditIcon />
                    </div>
            }
            {visibleAddMovie && <AddMovie setVisibleAddMovie={toggleVisible} movie={props}/>}
            {visibleMessageForm && <MessageForm setVisible={setVisibleMessageForm} title="delete movie" message="Are you sure you want to delete this movie?"/>}
        </>
    )
}

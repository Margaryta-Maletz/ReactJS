import React, {useState} from 'react';
import './EditButton.css';
import { AddMovie } from '../AddMovie';
import { MessageForm } from '../MessageForm';
import { CloseButton } from '../CloseButton'

export type CardPosterProp = {
    imagePath: string
    imageAlt: string,
    title: string,
    genre: string,
    releaseDate: number,
}

export const EditButton: React.FC<CardPosterProp> = (props) => {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const handleOpenIsMenu = () => {
        setIsMenu(true);
    }
    const handleCloseIsMenu = () => {
        setIsMenu(false);
    }

    const [visibleAddMovie, setVisibleAddMovie] = useState<boolean>(false);
    const handleOpenFormEdit = () => {
        setVisibleAddMovie(true);
    }

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
                            <CloseButton width="11" height="12"/>
                        </div>
                        <label className="edit-menu_button" onClick={handleOpenFormEdit}>Edit</label>
                        <label className="edit-menu_button" onClick={handleOpenFormDelete}>Delete</label>
                    </div>
                    : <svg className="edit-button" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleOpenIsMenu}>
                        <g filter="url(#filter0_d)">
                            <circle cx="22" cy="22" r="18" fill="#2A202D"/>
                        </g>
                        <circle cx="22" cy="15" r="2" fill="white"/>
                        <circle cx="22" cy="22.5" r="2" fill="white"/>
                        <circle cx="22" cy="30" r="2" fill="white"/>
                        <defs>
                            <filter id="filter0_d" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196596 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
            }
            {visibleAddMovie && <AddMovie isVisible={visibleAddMovie} setVisible={setVisibleAddMovie} movie={props}/>}
            {visibleMessageForm && <MessageForm setVisible={setVisibleMessageForm} title="delete movie" message="Are you sure you want to delete this movie?"/>}
        </>
    )
}

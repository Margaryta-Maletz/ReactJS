import React, {useState} from 'react';
import styles from './EditButton.module.css';
import { AddMovie } from '../AddMovie';
import { MessageForm } from '../MessageForm';
import { CloseButton } from '../CloseButton'
import useToggle from "../UseToggle";
import {EditIcon} from "../EditIcon";
import {IMovie} from '../../store/types';

export const EditButton: React.FC<IMovie> = (props) => {
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
                    ? <div className={styles.editMenu}>
                        <div className={styles.editMenClose} onClick={handleCloseIsMenu}>
                            <CloseButton width={11} height={12}/>
                        </div>
                        <label className={styles.editMenuButton} onClick={toggleVisible}>Edit</label>
                        <label className={styles.editMenuButton} onClick={handleOpenFormDelete}>Delete</label>
                    </div>
                    : <div className={styles.editButton} onClick={handleOpenIsMenu}>
                        <EditIcon />
                    </div>
            }
            {visibleAddMovie && <AddMovie setVisibleAddMovie={toggleVisible} movie={props}/>}
            {visibleMessageForm && <MessageForm setVisible={setVisibleMessageForm} title="delete movie" message="Are you sure you want to delete this movie?" deletedId={props.id}/>}
        </>
    )
}

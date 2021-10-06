import React, {useEffect, useState} from 'react';
import './MessageForm.css';
import LogoIcon from '../LogoIcon'
import CloseButton from '../CloseButton'

export const MessageForm = (props) => {
    const handleChangeVisible = () => {
        props.setVisible(false);
    }

    const [isConfirm, setIsConfirm] = useState<boolean>(false);
    const handleChangeIsConfirm = () => {
        setIsConfirm(true);
        props.setVisible(false);
    }
    useEffect(() => {
        {isConfirm && console.log(props?.title ?? "form")}
    });

    return (
        <div className="wrapper wrapper-add_movie-background wrapper-background">
            <LogoIcon />
            <div className="wrapper wrapper-message">
                <div className="add_movie-close" onClick={handleChangeVisible}>
                    <CloseButton />
                </div>
                <h2 className="add_movie-title">
                    {props?.title ?? "form"}
                </h2>
                <label className="message-label">
                    {props?.message ?? "Are you sure?"}
                </label>
                <label className="add_movie-button add_movie-button add_movie-button-submit" onClick={handleChangeIsConfirm}>confirm</label>
            </div>
        </div>
    )
}

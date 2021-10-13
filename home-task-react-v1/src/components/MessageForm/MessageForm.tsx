import React, {useEffect, useState} from 'react';
import './MessageForm.css';
import { LogoIcon } from '../LogoIcon';
import { CloseButton } from '../CloseButton';

type SetVisibleProps = {
    setVisible: (visible: boolean) => void,
    title: string,
    message: string,
}

export const MessageForm: React.FC<SetVisibleProps> = ({ setVisible, title,message }) => {
    const handleChangeVisible = () => {
        setVisible(false);
    }

    const [isConfirm, setIsConfirm] = useState<boolean>(false);
    const handleChangeIsConfirm = () => {
        setIsConfirm(true);
        setVisible(false);
    }
    useEffect(() => {
        {isConfirm && console.log(title ?? "form")}
    });

    return (
        <div className="wrapper wrapper-add_movie-background wrapper-background">
            <LogoIcon />
            <div className="wrapper wrapper-message">
                <div className="add_movie-close" onClick={handleChangeVisible}>
                    <CloseButton />
                </div>
                <h2 className="add_movie-title">
                    {title ?? "form"}
                </h2>
                <label className="message-label">
                    {message ?? "Are you sure?"}
                </label>
                <label className="add_movie-button add_movie-button add_movie-button-submit" onClick={handleChangeIsConfirm}>confirm</label>
            </div>
        </div>
    )
}
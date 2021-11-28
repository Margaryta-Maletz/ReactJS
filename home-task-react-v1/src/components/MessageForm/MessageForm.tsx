import styles from './MessageForm.module.css';
import { LogoIcon } from '../LogoIcon';
import { CloseButton } from '../CloseButton';
import { Formik, Form } from 'formik';
import axios from "axios";
import {setEditMovieList} from "../../store/slice";
import React from "react";
import Router from "next/router";

type SetVisibleProps = {
    setVisible: (visible: boolean) => void,
    title: string,
    message: string,
    deletedId: number,
}

export const MessageForm: React.FC<SetVisibleProps> = ({ setVisible, title,message, deletedId }) => {
    const handleChangeVisible = () => {
        setVisible(false);
    }
    return (
        <div className={`wrapper ${styles.wrapperBackground}`}>
            <LogoIcon />
            <Formik
                initialValues={{
                    id: deletedId,
                }}

                onSubmit={async () => {
                    handleChangeVisible();
                    await
                        axios.delete(`http://localhost:4000/movies/${deletedId}`)
                            .then(Router.reload)
                            .catch((error) => alert(error));
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className={`wrapper ${styles.wrapperMessage}`}>
                            <div className={styles.close} onClick={handleChangeVisible}>
                                <CloseButton />
                            </div>
                            <h2 className={styles.title}>
                                {title ?? "form"}
                            </h2>
                            <label className={styles.label}>
                                {message ?? "Are you sure?"}
                            </label>
                            <button className={styles.submit} type="submit" disabled={isSubmitting}>confirm</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

import './MessageForm.css';
import { LogoIcon } from '../LogoIcon';
import { CloseButton } from '../CloseButton';
import { Formik, Field, Form } from 'formik';
import axios from "axios";

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
        <div className="wrapper wrapper-add_movie-background wrapper-background">
            <LogoIcon />
            <Formik
                initialValues={{
                    id: deletedId,
                }}

                onSubmit={async (values) => {
                    handleChangeVisible();
                    await
                        axios.delete(`http://localhost:4000/movies/${deletedId}`)
                            .then(() => {})
                            .catch((error) => alert(error));
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
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
                            <button className="add_movie-button add_movie-button-submit" type="submit" disabled={isSubmitting}>confirm</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

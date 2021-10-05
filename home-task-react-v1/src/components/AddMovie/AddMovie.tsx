import React, {useState, useEffect, cloneElement} from 'react';
import './AddMovie.css';
import LogoIcon from '../LogoIcon'
import CloseButton from '../CloseButton'

export const AddMovie = (props) => {
    const isEditMovie = false;
    const [valueTitle, setValueTitle] = useState<string>("");
    const handleChangeTitle = (event) => {
        setValueTitle(event.target.value);
    }

    const [valueDate, setValueDate] = useState<string>("");
    const handleChangeDate = (event) => {
        setValueDate(event.target.value);
    }

    const [valueMovieURL, setValueMovieURL] = useState<string>("");
    const handleChangeMovieURL = (event) => {
        setValueMovieURL(event.target.value);
    }

    const [valueRating, setValueRating] = useState<string>("");
    const handleChangeRating = (event) => {
        setValueRating(event.target.value);
    }

    const [valueGenre, setValueGenre] = useState<string>("");
    const handleChangeGenre = (event) => {
        setValueGenre(event.target.checked);
    }

    const [valueRuntime, setValueRuntime] = useState<string>("");
    const handleChangeRuntime = (event) => {
        setValueRuntime(event.target.value);
    }

    const [valueOverview, setValueOverview] = useState<string>("");
    const handleChangeOverview = (event) => {
        setValueOverview(event.target.value);
    }

    const [isVisible, setIsVisible] = useState<boolean>(props.isOpen);
    const handleChangeIsVisible = () => {
        setIsVisible(false);
        return () => {
            //TODO need close window? I don't now HOW :(
            cloneElement(this);
        }
    }

    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const handleChangeIsSubmit = () => {
        setIsSubmit(true);
        setIsVisible(false);
    }

    useEffect(() => {
        const oneWord = isEditMovie ? '"Edit movie"' : '"Add movie"';
        const secondWord = isVisible ? ' open.' : ' close.';
        console.log('Form ', oneWord, secondWord);
    });

    useEffect(() => {
        {isSubmit && console.log('Save information from form')}
    });

    return (
        <div className="wrapper wrapper-add_movie-background">
            <LogoIcon />
            <form className="wrapper wrapper-add_movie">
                <div className="add_movie-close" onClick={handleChangeIsVisible}>
                    <CloseButton />
                </div>
                <h2 className="add_movie-title">
                    {isEditMovie
                    ? 'edit movie'
                    : 'add movie'}
                </h2>
                <>
                    <label className="add_movie-label">
                        title
                        <input className="add_movie-input" type='text' placeholder="Moana" value={valueTitle} onChange={handleChangeTitle}/>
                    </label>
                    <label className="add_movie-label add_movie-label-second_column">
                        release date
                        <input className="add_movie-input add_movie-input-second_column" type='date' placeholder="Select Date" value={valueDate} onChange={handleChangeDate}/>
                    </label>
                </>
                <>
                    <label className="add_movie-label">
                        movie URL
                        <input className="add_movie-input" type='text' placeholder="https://" value={valueMovieURL} onChange={handleChangeMovieURL}/>
                    </label>
                    <label className="add_movie-label add_movie-label-second_column">
                        rating
                        <input className="add_movie-input add_movie-input-second_column" type='text' placeholder="7.8" value={valueRating} onChange={handleChangeRating}/>
                    </label>
                </>
                <>
                    <label className="add_movie-label">
                        genre
                        <select className='add_movie-input add_movie-select' onChange={handleChangeGenre}>
                            <option selected className='add_movie-select-item'>Select Genre</option>
                            {{valueGenre} && <option className='add_movie-select-item'>{valueGenre}</option>}
                        </select>
                    </label>
                    <label className="add_movie-label add_movie-label-second_column">
                        runtime
                        <input className="add_movie-input add_movie-input-second_column" type='text' placeholder="minutes" value={valueRuntime} onChange={handleChangeRuntime}/>
                    </label>
                </>
                <label className="add_movie-label">
                    overview
                    <textarea className="add_movie-input add_movie-textarea" placeholder="Movie description" onChange={handleChangeOverview}>{valueOverview}</textarea>
                </label>
                <div className='add_movie-buttons_block'>
                    <input className="add_movie-button add_movie-button add_movie-button-reset" type='reset' onClick={handleChangeIsVisible}/>
                    <input className="add_movie-button add_movie-button add_movie-button-submit" type='submit' onClick={handleChangeIsSubmit}/>
                </div>
            </form>
        </div>
    )
}

/*
import React, {useState, useEffect} from 'react';
import './AddMovie.css';
import { LogoIcon } from '../LogoIcon';
import { CloseButton } from '../CloseButton';
import { CardPosterProp } from "../EditButton";

type AddMovieProps = {
    movie?: CardPosterProp,
    setVisibleAddMovie: () => void,
}
export const AddMovie: React.FC<AddMovieProps> = (props) => {
    const isEditMovie = props.movie;
    const [valueTitle, setValueTitle] = useState<string>(props.movie?.title ?? "");
    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTitle(event.target.value);
    }

    const [valueDate, setValueDate] = useState<string>(props.movie?.releaseDate?.toString() ?? "");
    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueDate(event.target.value);
    }

    const [valueMovieURL, setValueMovieURL] = useState<string>(props.movie?.movieURL ?? "");
    const handleChangeMovieURL = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueMovieURL(event.target.value);
    }

    const [valueRating, setValueRating] = useState<string>(props.movie?.rating?.toString() ?? "");
    const handleChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueRating(event.target.value);
        props.setVisibleAddMovie();
    }

/!*    const [valueGenre, setValueGenre] = useState<string>(props.movie?.genre ?? "");
    const handleChangeGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueGenre(event.target.value);
    }*!/

    const [valueRuntime, setValueRuntime] = useState<string>(props.movie?.runtime?.toString() ?? "");
    const handleChangeRuntime = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueRuntime(event.target.value);
    }

    const [valueOverview, setValueOverview] = useState<string>(props.movie?.overview ?? "");
    const handleChangeOverview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueOverview(event.target.value);
    }

    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const handleChangeIsSubmit = () => {
        setIsSubmit(true);
    }

    const handleChangeProps = () => {
       setValueTitle(props.movie?.title ?? "");
       setValueDate(props.movie?.releaseDate?.toString() ?? '');
       setValueMovieURL(props.movie?.movieURL ?? "");
       setValueRating(props.movie?.rating?.toString() ?? "");
/!*       setValueGenre(props.movie?.genre ?? "");*!/
       setValueRuntime(props.movie?.runtime?.toString() ?? "");
       setValueOverview(props.movie?.overview ?? "");
    }

    useEffect(() => {
        const oneWord = isEditMovie ? '"Edit movie"' : '"Add movie"';
        console.log('Form ', oneWord, ' open.');
    }, []);

    useEffect(() => {
        {isSubmit && console.log('Save information from form')}
    }, [isSubmit]);

    return (
        <div className="wrapper wrapper-add_movie-background">
            <LogoIcon />
            <div className="wrapper wrapper-add_movie">
                <div className="add_movie-close" onClick={props.setVisibleAddMovie}>
                    <CloseButton/>
                </div>
                <h2 className="add_movie-title">
                    {isEditMovie
                    ? 'edit movie'
                    : 'add movie'}
                </h2>
                <>
                    <label className="add_movie-label">
                        title
                        <input className="add_movie-input" type="text" placeholder="Mona" value={valueTitle} onChange={handleChangeTitle}/>
                    </label>
                    <label className="add_movie-label add_movie-label-second_column">
                        release date
                        <input className="add_movie-input add_movie-input-second_column" type='date' placeholder="Select Date" value={valueDate} onChange={handleChangeDate}/>
                    </label>
                </>
                <>
                    <label className="add_movie-label">
                        movie URL
                        <input className="add_movie-input" type="text" placeholder="https://" value={valueMovieURL} onChange={handleChangeMovieURL}/>
                    </label>
                    <label className="add_movie-label add_movie-label-second_column">
                        rating
                        <input className="add_movie-input add_movie-input-second_column" type="text" placeholder="7.8" value={valueRating} onChange={handleChangeRating}/>
                    </label>
                </>
                <>
                    <label className="add_movie-label">
                        genre
                        <select className='add_movie-input add_movie-select'>
                            <option selected className='add_movie-select-item'>Select Genre</option>
                            {/!*{{valueGenre} && <option className='add_movie-select-item'>{valueGenre}</option>}*!/}
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
                    <input className="add_movie-button add_movie-button add_movie-button-reset" type='reset' onClick={handleChangeProps}/>
                    <input className="add_movie-button add_movie-button add_movie-button-submit" type='submit' onClick={props.setVisibleAddMovie}/>
                </div>
            </div>
        </div>
    )
}
*/

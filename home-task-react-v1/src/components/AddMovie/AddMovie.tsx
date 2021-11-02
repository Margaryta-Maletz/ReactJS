import React, {useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import './AddMovie.css';
import { LogoIcon } from '../LogoIcon';
import { CloseButton } from '../CloseButton';
import { IMovie } from '../../store/types';
import { genres } from "../../consts";
import axios from "axios";

type AddMovieProps = {
    movie?: IMovie,
    setVisibleAddMovie: () => void,
}
export const AddMovie: React.FC<AddMovieProps> = (props) => {
    const isEditMovie = props.movie;

    function validateTitle(value: string) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length > 30) {
            error = 'Must be 30 characters or less';
        }
        return error;
    }

    function validateReleaseDate(value: Date) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }

    function validatePosterPath(value: string) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }

    function validateOverview(value: string) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length > 255) {
            error = 'Must be 255 characters or less';
        }
        return error;
    }

    function validateRuntime(value: number) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value > 0) {
            error = 'Must be more than 0';
        }
        return error;
    }

    function validateGenres(value: string) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!value[0]) {
            error = 'Must be array of string';
        }

        return error;
    }

    useEffect(() => {
        const oneWord = isEditMovie ? '"Edit movie"' : '"Add movie"';
        console.log('Form ', oneWord, ' open.');
    }, []);

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
                <Formik
                    initialValues={{
                        title: (props.movie?.title || ""),
                        tagline: props.movie?.tagline || "image",
                        vote_average: props.movie?.vote_average || 0,
                        vote_count: props.movie?.vote_count || 0,
                        release_date: props.movie?.release_date || "",
                        poster_path: props.movie?.poster_path || "",
                        overview: props.movie?.overview || "",
                        budget: props.movie?.budget || 0,
                        revenue: props.movie?.revenue || 0,
                        genres: props.movie?.genres || ["Action"],
                        runtime: props.movie?.runtime || null,
                        id: props.movie?.id || null,
                    }}

                    onSubmit={async (values) => {
                        isEditMovie
                            ? await
                            axios.put('http://localhost:4000/movies', values)
                            .then((require) => alert(JSON.stringify(require, null, 2)))
                            .catch((error) => alert(error))
                            : await
                                axios.post('http://localhost:4000/movies', {
                                    title: values.title,
                                    tagline: values.title,
                                    vote_average: values.vote_average,
                                    vote_count: values.vote_count,
                                    release_date: values.release_date,
                                    poster_path: values.poster_path,
                                    overview: values.overview,
                                    budget: values.budget,
                                    revenue: values.revenue,
                                    genres: values.genres,
                                    runtime: values.runtime,
                                })
                                    .then(() => {})
                                    .catch((error) => alert(error));
                        props.setVisibleAddMovie();
                    }}
                >
                    {({ errors, touched, isSubmitting, validateField, validateForm }) => (
                        <Form>
                            <label htmlFor="title" className="add_movie-label">
                                title
                                <Field name="title" className="add_movie-input" type="text" placeholder="Title movie" validate={validateTitle}/>
                                {errors.title && touched.title && <div>{errors.title}</div>}
                            </label>
                            <label htmlFor="release_date" className="add_movie-label add_movie-second_column">
                                release date
                                <Field name="release_date" className="add_movie-input add_movie-second_column" type="date" placeholder="Select Date" validate={validateReleaseDate}/>
                                {errors.release_date && touched.release_date && <div>{errors.release_date}</div>}
                            </label>
                            <label htmlFor="poster_path" className="add_movie-label">
                                movie URL
                                <Field name="poster_path" className="add_movie-input" type="text" placeholder="https://" validate={validatePosterPath}/>
                                {errors.poster_path && touched.poster_path && <div>{errors.poster_path}</div>}
                            </label>
                            <label htmlFor="vote_average" className="add_movie-label add_movie-second_column">
                                rating
                                <Field name="vote_average" className="add_movie-input add_movie-second_column" type={"number"} placeholder="7.8" />
                            </label>
                            <label htmlFor="genres" className="add_movie-label">
                                genre
                                <Field name="genres" className="add_movie-input add_movie-select" as="select" placeholder="Select Genre" validate={validateGenres}>
                                    {errors.genres && touched.genres && <div>{errors.genres}</div>}
                                    {genres.map((elem) => (
                                        <option className='add_movie-select-item' key={elem} value={elem}>{elem}</option>
                                    ))}
                                </Field>
                            </label>
                            <label htmlFor="runtime" className="add_movie-label add_movie-second_column">
                                runtime
                                <Field name="runtime" className="add_movie-input add_movie-second_column" type={"number"} placeholder="minutes" validate={validateRuntime}/>
                                {errors.runtime && touched.runtime && <div>{errors.runtime}</div>}
                            </label>
                            <label htmlFor="overview" className="add_movie-label">
                                overview
                                <Field name="overview" className="add_movie-input add_movie-textarea" type="textarea" placeholder="Movie description" validate={validateOverview}/>
                                {errors.overview && touched.overview && <div>{errors.overview}</div>}
                            </label>
                            <div className='add_movie-buttons_block'>
                                <input className="add_movie-button add_movie-button-reset" type='reset'/>
                                <input className="add_movie-button add_movie-button-submit" type="submit" disabled={isSubmitting}/>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

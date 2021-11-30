import React, {useEffect} from 'react';
import { Formik, Field, Form } from 'formik';
import styles from './AddMovie.module.css';
import { LogoIcon } from '../LogoIcon';
import { CloseButton } from '../CloseButton';
import {IMovie} from '../../store/types';
import {multiGenres} from "../../consts";
import axios from "axios";
import {CustomMultiSelect} from "./CustomMultiSelect";
import Router from "next/router";

type AddMovieProps = {
    movie?: IMovie,
    setVisibleAddMovie: () => void,
}
export const AddMovie: React.FC<AddMovieProps> = (props) => {
    const isEditMovie = props.movie;
    const formInitialValues = {
        title: props.movie?.title || "",
        tagline: props.movie?.tagline || "image",
        vote_average: props.movie?.vote_average || 0,
        vote_count: props.movie?.vote_count || 0,
        release_date: props.movie?.release_date || "",
        poster_path: props.movie?.poster_path || "",
        overview: props.movie?.overview || "",
        budget: props.movie?.budget || 0,
        revenue: props.movie?.revenue || 0,
        genres: props.movie?.genres || [],
        runtime: props.movie?.runtime || null,
        id: props.movie?.id || null,
    }

    function validateTitle(value: string) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length > 50) {
            error = 'Must be 50 characters or less';
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
        }
        return error;
    }

    function validateRuntime(value: number) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }

    function validateGenres(value: string[]) {
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
        <div className={`wrapper ${styles.wrapperBackground}`}>
            <LogoIcon />
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.close} onClick={props.setVisibleAddMovie}>
                    <CloseButton/>
                </div>
                <h2 className={styles.title}>
                    {isEditMovie
                    ? 'edit movie'
                    : 'add movie'}
                </h2>
                <Formik
                    initialValues={ formInitialValues }

                    onSubmit={async (values) => {
                        isEditMovie
                            ? await
                            axios.put('http://localhost:4000/movies', values)
                            .then(Router.reload)
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
                                    .then(Router.reload)
                                    .catch((error) => alert(error));
                        props.setVisibleAddMovie();
                    }}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form className={styles.form}>
                            <label htmlFor="title" className={styles.label}>
                                title
                                <Field name="title" className={styles.input} type="text" placeholder="Title movie" validate={validateTitle}/>
                                {errors.title && touched.title && <div className={styles.error}>{errors.title}</div>}
                            </label>
                            <label htmlFor="release_date" className={`${styles.label} ${styles.secondColumn}`}>
                                release date
                                <Field name="release_date" className={`${styles.input} ${styles.secondColumn}`} type="date" placeholder="Select Date" validate={validateReleaseDate}/>
                                {errors.release_date && touched.release_date && <div className={styles.error}>{errors.release_date}</div>}
                            </label>
                            <label htmlFor="poster_path" className={styles.label}>
                                movie URL
                                <Field name="poster_path" className={styles.input} type="text" placeholder="https://" validate={validatePosterPath} autocomplete="off"/>
                                {errors.poster_path && touched.poster_path && <div className={styles.error}>{errors.poster_path}</div>}
                            </label>
                            <label htmlFor="vote_average" className={`${styles.label} ${styles.secondColumn}`}>
                                rating
                                <Field name="vote_average" className={`${styles.input} ${styles.secondColumn}`} type={"number"} step={0.1} placeholder="7.8" />
                            </label>
                            <label htmlFor="genres" className={styles.label}>
                                genre
                                <Field
                                    className={styles.select}
                                    name="genres"
                                    options={multiGenres}
                                    component={CustomMultiSelect}
                                    placeholder="Select Genre"
                                    validate={validateGenres}
                                    isMulti={true}
                                />
                            </label>
                            <label htmlFor="runtime" className={`${styles.label} ${styles.secondColumn}`}>
                                runtime
                                <Field name="runtime" className={`${styles.input} ${styles.secondColumn}`} type={"number"} step={5.0} placeholder="minutes" validate={validateRuntime} autocomplete="off"/>
                                {errors.runtime && touched.runtime && <div className={styles.error}>{errors.runtime}</div>}
                            </label>
                            <label htmlFor="overview" className={styles.label}>
                                overview
                                <Field name="overview" className={`${styles.input} ${styles.textarea}`} as="textarea" placeholder="Movie description" validate={validateOverview} autocomplete="off"/>
                                {errors.overview && touched.overview && <div className={styles.error}>{errors.overview}</div>}
                            </label>
                            <div className={styles.buttonsBlock}>
                                <input className={`${styles.button} ${styles.buttonReset}`}  type='reset'/>
                                <input className={`${styles.button} ${styles.buttonSubmit}`} type="submit" disabled={isSubmitting}/>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

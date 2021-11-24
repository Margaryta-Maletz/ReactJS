import React from 'react';
import {DetailsMovie} from '../../src/components/DetailsMovie';
import { GetServerSideProps } from 'next'
import {IMovie} from "../../src/store/types";

interface IdProps {
    movie: IMovie
}

const id:React.FC<IdProps> = ({movie}) => {
    return <>
        <DetailsMovie movie={movie}/>
    </>
}

export const getServerSideProps:GetServerSideProps<IdProps, {id: string}> = async({params}) => {
    // Call an external API endpoint to get movies
    const { id } = params || {id: ''};

    const res = await fetch(`http://localhost:4000/movies/${id}`)
    const movie = await res.json()

    return {
        props: {
            movie
        },
    }
}

export default id;

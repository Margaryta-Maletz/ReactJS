import 'regenerator-runtime/runtime';
import React from "react";
import {Main} from '../src/components/Main'
import {IMovie} from "../src/store/types";


interface HomeProps {
    totalAmount: number,
    movies: IMovie[]
}

const Search: React.FC<HomeProps> = ({totalAmount,movies}) => {
    return <Main totalAmount={totalAmount} movies={movies}/>
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:4000/movies')
    const {totalAmount: totalAmount, data: movies} = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            totalAmount,
            movies,
        },
    }
}

export default Search;

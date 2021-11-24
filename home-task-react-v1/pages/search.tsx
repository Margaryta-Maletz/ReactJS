import 'regenerator-runtime/runtime';
import React from "react";
import {Main} from '../src/components/Main'
import {IMovie} from "../src/store/types";
import {Footer} from "../src/components/Footer";
import {Header} from "../src/components/Header";


interface HomeProps {
    totalAmount: number,
    movies: IMovie[]
}

const Search: React.FC<HomeProps> = ({totalAmount,movies}) => {
    return <>
        <Header />
        <Main totalAmount={totalAmount} movies={movies}/>
        <Footer />
    </>
}

export async function getStaticProps() {
    // Call an external API endpoint to get movies
    const url = new URL("http://localhost:4000/movies");
    const params = {
        search: '',
        searchBy: 'title',
        filter: '',
        sortBy: 'vote_average',
        sortOrder: 'desc',
        limit: '6',
    };
    url.search = new URLSearchParams(params).toString();
    const res = await fetch(url.toString())
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

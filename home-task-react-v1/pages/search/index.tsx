import 'regenerator-runtime/runtime';
import React from 'react';
import {Main} from '../../src/components/Main'
import {IMovie} from '../../src/store/types';
import {Footer} from '../../src/components/Footer';
import {Header} from '../../src/components/Header';
import {BaseRouter} from "next/dist/shared/lib/router/router";

interface SearchProps {
    totalAmount: number,
    movies: IMovie[]
}

const Search: React.FC<SearchProps> = ({totalAmount,movies}) => {
    return <>
        <Header />
        <Main totalAmount={totalAmount} movies={movies}/>
        <Footer />
    </>
}

export async function getServerSideProps(router: BaseRouter) {
    // Call an external API endpoint to get movies
    const url = new URL("http://localhost:4000/movies");
    const params = {
        search: router?.pathname || '',
        searchBy: 'title',
        filter: router?.query.filter?.toString() || '',
        sortBy: router?.query.sortBy?.toString() || 'vote_average',
        sortOrder: 'desc',
        limit: '6',
    };
    url.search = new URLSearchParams(params).toString();
    const res = await fetch(url.toString())
    const {totalAmount: totalAmount, data: movies} = await res.json()

    return {
        props: {
            totalAmount,
            movies,
        },
    }
}

export default Search;

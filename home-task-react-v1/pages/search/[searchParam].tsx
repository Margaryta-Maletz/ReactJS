import {IMovie} from "../../src/store/types";
import React from "react";
import {Header} from "../../src/components/Header";
import {Main} from "../../src/components/Main";
import {Footer} from "../../src/components/Footer";
import { GetServerSideProps } from 'next'

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

export const getServerSideProps:GetServerSideProps<SearchProps, {searchParam: string}> = async({params, query}) => {
    // Call an external API endpoint to get movies
    const { searchParam } = params || {searchParam: ''};
    const filter = query['filter'] || '';
    const sortBy = query['sortBy'] || 'vote_average';
    const url = new URL('http://localhost:4000/movies');
    const requestParams = {
        search: searchParam,
        searchBy: 'title',
        filter: filter.toString(),
        sortBy: sortBy.toString(),
        sortOrder: 'desc',
        limit: '6',
    };
    url.search = new URLSearchParams(requestParams).toString();

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

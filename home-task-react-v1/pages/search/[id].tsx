import 'regenerator-runtime/runtime';
import React from 'react';
import {Main} from '../../src/components/Main'
import {IMovie} from '../../src/store/types';
import {Footer} from '../../src/components/Footer';
import {DetailsMovie} from '../../src/components/DetailsMovie';
import {BaseRouter} from "next/dist/shared/lib/router/router";


const id = () => {
    return <>
        <DetailsMovie />
    </>
}


export default id;

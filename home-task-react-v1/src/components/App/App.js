import React from 'react';
import { Provider } from 'react-redux';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { DetailsMovie } from "../DetailsMovie";
import { store } from '../../store/store'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Provider store={store}>
                <Routes>
                   {/* <Route path="/movies/:id" component={DetailsMovie}/>*/}
                    <Route path="*" component={Header}/>
                </Routes>
                {/*<Header />*/}
                <Main />
                <Footer />
            </Provider>
        </Router>
    )
}

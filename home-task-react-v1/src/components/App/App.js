import React from 'react';
import {Provider} from 'react-redux';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { DetailsMovie } from "../DetailsMovie";
import { store } from '../../store/store'
import './index.css'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

export default function App() {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/movie=:movieID/">
                        <DetailsMovie />
                    </Route>
                    <Route path="/search/:searchQuery">
                        <Header />
                    </Route>
                    <Route path="/search" exact>
                        <Header />
                    </Route>
                    <Redirect from="/" to="/search"/>
                </Switch>
                <Main />
                <Footer />
            </Router>
        </Provider>
    )
}

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
                        <Main />
                        <Footer />
                    </Route>
                    <Route path="/search/:searchQuery">
                        <Header />
                        <Main />
                        <Footer />
                    </Route>
                    <Route path="/search" exact>
                        <Header />
                        <Main />
                        <Footer />
                    </Route>
                    <Route path="/" exact>
                        <Redirect to="/search"/>
                    </Route>
                    <Route path="/*">
                        <h1> Error 404 </h1>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}

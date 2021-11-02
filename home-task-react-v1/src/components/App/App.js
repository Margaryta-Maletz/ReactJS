import React from 'react';
import { Provider } from 'react-redux';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { store } from '../../store/store'
import './index.css'
import ThemeProvider from "elevate-ui/ThemeProvider";

export default function App() {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <Header />
                <Main />
                <Footer />
            </Provider>
        </ThemeProvider>
    )
}

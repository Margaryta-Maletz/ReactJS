import React from 'react';
import { Provider } from 'react-redux';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { store } from '../../store/store'
import './index.css'

export default function App() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
            <Footer />
        </Provider>
    )
}

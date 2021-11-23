import React from 'react';
import '../src/index.css';
import '../src/components/Main/Main.css';
import '../src/components/GenreToggle/GenreToggle.css';
import '../src/components/CardPoster/CardPoster.css';
import '../src/components/CardPosterList/CardPosterList.css';
import '../src/components/ResultCount/ResultCount.css';
import '../src/components/ResultsSort/ResultsSort.css';
import '../src/components/Footer/Footer.css';
import '../src/components/Header/Header.css';
import '../src/components/SearchInput/SearchInput.css'


// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;

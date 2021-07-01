/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from 'react';
import { ThemeProvider } from 'theme-ui';

import Nav from '../src/components/nav';

import theme from '../theme';

// import '../src/styles/styles.css';

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={ theme }>
            <div>
                <Nav />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
};
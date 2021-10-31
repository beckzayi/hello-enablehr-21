import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout';
import theme from './theme';

export const wrapPageElement = ({ element, props }) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout {...props} children={element} />
        </ThemeProvider>
    );
};

import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    h1, h2, h3, h4, h5, h6 {
        color: #020a2c;
    }

    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
        font-family: 'Futura PT', sans-serif;
    }

    h1, .h1 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.25;
        margin-bottom: 1.5rem;
    }

    h2, .h2 {
        font-size: 1.5625rem;
        line-height: 1.25;
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }

    h3, .h3 {
        font-size: 1.375rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    h4, .h4 {
        font-size: 1.25rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }

    h2, h3, h4, h5, h6,
    .h2, .h3, .h4, .h5, .h6 {
        font-weight: 600;
    }

    .font-bold {
        font-family: 'Futura PT', sans-serif !important;
    }
`;

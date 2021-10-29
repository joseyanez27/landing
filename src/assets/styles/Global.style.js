import { createGlobalStyle } from "styled-components";
import { abeezee, cattleya } from "../fonts/fonts";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'abeezee-regular';
        src: url(${abeezee.regular}) format('woff');
    }

    @font-face {
        font-family: 'abeezee-italic';
        src: url(${abeezee.italic}) format('woff');
    }

    @font-face {
        font-family: 'cattleya';
        src: url(${cattleya.regular}) format('woff');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        font-family: 'OpenSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        z-index: 100;
    }

    a {
        text-decoration: none;
    }

`;
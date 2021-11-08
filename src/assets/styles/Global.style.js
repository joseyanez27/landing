import { createGlobalStyle } from "styled-components";
import { patrizia, monserrat } from "../fonts/fonts";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'patrizia';
        src: url(${patrizia.regular}) format('woff');
    }


    @font-face {
        font-family: 'monserrat';
        src: url(${monserrat.regular}) format('woff');
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
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        color: #C7C7C7;

    }

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
    }

    button, a{
        cursor: pointer;
        text-decoration: none;
    }


    h1,h2,h3,h4{
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        color: #fff;
    }


    .container{
        width: min(100%, 1280px);
        margin: auto;
        padding: 0 24px;
    }

    .title-section {
        flex: 1;
        font-size: clamp(48px, 7vw, 76px);
        line-height: 0.95;
    }

    @media (max-width: 1023px) {
        .container {
            padding: 0 24px;
        }
    }

    @media (max-width: 767px) {
        .container {
            padding: 0 20px;
        }

        .title-section {
            font-size: 42px;
        }
    }
`;

export default globalStyles;

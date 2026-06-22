import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    *{
        background-color: #0A0A0A;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        color: #C7C7C7;

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
`;

export default globalStyles;

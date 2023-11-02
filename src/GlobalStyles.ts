import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: white;
    }
    html{
        background-color: black;
    }
    button{
        background-color: transparent;
        outline: none;
        border: none;
    }
`
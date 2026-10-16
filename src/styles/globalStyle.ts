import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* Removido o @import daqui para o navegador carregar direto pelo HTML */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: #0c0c0c;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
}

button {
    cursor: pointer;
    border: none;
    font-family: 'Poppins', sans-serif;
}
`
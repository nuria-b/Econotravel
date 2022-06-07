import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root{
    --bg-img-nav: #4B7F55;
    --bg-button: #526956;
    --hover-primary: #88CF4E;
    --hover-secondary: #B986D5;
    --font-color-read: #562C9C;
    --border: #4B7F55;
    --font-color: #4B7F55;
    --font-color-bt: white;
    --font-color-pay: red;
    --font-color-l:;
    --bg-page:#ffeabc;
    --bg-nav:;
    --bg-input-search: white;
    --color-boxShadow: #000000;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font)
  } 

  body{
    background: var(--bg-page);
  }
`

export default  GlobalStyle





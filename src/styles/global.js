import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    background-color: ${colors.lighter};
  }

  button{
    cursor: pointer;
  }

  html,
  body,
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus, *:active{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
    background: #19171f;
  }

  body{
    -webkit-smooth-rendering: antialiased !important;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

`;

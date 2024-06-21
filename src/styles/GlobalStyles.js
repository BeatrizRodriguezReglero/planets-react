import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: sans-serif;
    background-image: url(./images/background-stars.svg);
    background-size: cover;
    background-color: #070724;
    color: white;
    font-family: "League Spartan", sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  h1,h2{
    margin: 0;
    font-family: 'Antonio', sans-serif;
  }  
 
 span{ 
  font-family: 'Antonio', sans-serif;

 }
`;

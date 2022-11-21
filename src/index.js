import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    width: 100vw;
    height: 100vh;
  }
  input{
    border: none;
    background: rgba(255,255,255,1);
    padding: 0;
    outline: none;
  }
  button {
    border: none;
    background: transparent;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

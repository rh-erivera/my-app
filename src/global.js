import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    text-rendering: optimizeLegibility;
    transition: all 0.3s ease-in-out;
    background-color: ${({ open }) => open ? '#ccc' : 'white'};
  }
  .container {
    padding: 35px 40px;
    display: flex;
    justify-content: space-between;
  }
  `
  
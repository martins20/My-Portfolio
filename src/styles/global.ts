import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-darkGray: #202833;
    --color-white: #eaebec;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, html, #root {
    width: 100%;
    height: 100%;

    background: var(--color-darkGray)
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    color: var(--color-white)
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    font-size: 3rem;
  }

  button {
    cursor: pointer;
  }
`;

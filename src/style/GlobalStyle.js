import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
  }

  img {
    display:block;
    max-width:100%;
    height:auto; 
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }

  li {
    list-style: none;
  }

  html,
  body {
    font-size:16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft JhengHei", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`;

export default GlobalStyle;

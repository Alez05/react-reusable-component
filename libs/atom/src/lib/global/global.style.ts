import { createGlobalStyle } from 'styled-components';

export const SReset = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const SFont = createGlobalStyle`
  @font-face {
  font-family: 'reusable-component';
  src:
    url('/font/re.ttf?y8mtbw') format('truetype'),
    url('/font/re.woff?y8mtbw') format('woff'),
    url('/font/re.svg?y8mtbw##') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
`;

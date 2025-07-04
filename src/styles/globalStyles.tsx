'use client'

import { createGlobalStyle } from 'styled-components';
import { media, theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;

    ${media.sm} {
      width: 95%;
    }
  }
`;

'use client'

import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;

    @media ${theme.media.sm} {
      width: 90%;
    }
  }
`;


export const TitleH2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 12px;
`

export const GlobalP = styled.p`
  font-size: 1rem;
  margin-bottom: 12px;
`

'use client'

import { media, theme, transitions } from '@/styles/theme'
import styled from 'styled-components'
import { StyledLink } from '../Button/ButtonStyles'

export const JobItemContainer = styled.article`
  width: 100%;
`

export const JobItemContent = styled.div`
  padding: 12px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.thirdColor};
  border-bottom: 5px solid ${theme.colors.primaryColor};
  border-radius: 5px;
  transition: ${transitions.default};

  &:hover {
    border-bottom: 5px solid ${theme.colors.forthColor};
    transition: ${transitions.default};
  }

  ${StyledLink} {
    background-color: ${theme.colors.primaryColor};
    border: 2px solid ${theme.colors.primaryColor};
    transition: ${transitions.default};
    padding: 6px 12px;
    margin-left: 10px;

    &:hover {
      background-color: ${theme.colors.forthColor};
      border: 2px solid ${theme.colors.forthColor};
      transition: ${transitions.default};
    }
  }

  ${media.sm} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    height: 100%;
    padding: 6px;

    h2 {
      font-size: 0.9rem;
    }

    h4 {
      font-size: 0.8rem;
    }

    ${StyledLink} {
      text-align: center;
      padding: 8px;
      font-size: 0.8rem;
    }
  }
`

export const JobItemDescription = styled.div`
  display: flex;
  gap: 10px;

  svg {
    color: ${theme.colors.primaryColor};
    font-size: 1.8rem;
    margin-right: 8px;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-right: 3px solid ${theme.colors.secondaryColor};
    padding-right: 8px;
    color: ${theme.colors.primaryColor};
  }

  ${media.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  ${media.sm} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3px;

    h2 {
      border: none;
    }
  }
`

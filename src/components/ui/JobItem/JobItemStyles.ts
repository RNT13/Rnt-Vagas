'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'
import { StyledLink } from '../Button/ButtonStyles'

export const JobItemContainer = styled.article`
  width: 100%;
`

export const JobItemContent = styled.div`
  padding: 12px 24px;
  margin: 12px 0;
  gap: 50px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.thirdColor};
  border-bottom: 5px solid ${theme.colors.primaryColor};
  border-radius: 5px;
  transition: all 0.3s ease;

  h2 {
    font-size: 1rem;
  }

  &:hover {
    border-bottom: 5px solid ${theme.colors.forthColor};
    transition: all 0.3s ease;
  }

  ${StyledLink} {
    background-color: ${theme.colors.primaryColor};
    border: 2px solid ${theme.colors.primaryColor};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.forthColor};
      border: 2px solid ${theme.colors.forthColor};
      transition: all 0.3s ease;
    }
  }
`

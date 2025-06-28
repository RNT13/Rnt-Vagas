'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const JobItemContainer = styled.article`
  width: 100%;
`

export const JobItemContent = styled.div`
  padding: 12px;
  margin: 12px 0;
  gap: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.thirdColor};
  border-bottom: 5px solid ${theme.colors.primaryColor};
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    border-bottom: 5px solid ${theme.colors.forthColor};
    transition: all 0.3s ease;
  }

  button {
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

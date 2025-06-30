'use client'

import { StyledLink } from '@/components/ui/Button/ButtonStyles'
import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${StyledLink} {
    background-color: transparent;
    border: 2px solid ${theme.colors.forthColor};

    &:hover {
      background-color: ${theme.colors.forthColor};
      color: ${theme.colors.primaryColor};
      font-weight: bold;
    }
  }
`

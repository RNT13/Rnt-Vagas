'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const ButtonContainer = styled.div``

const BaseButton = `
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
  background-color: ${theme.colors.secondaryColor};
  border: solid 1px ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};

  &:hover {
    background-color: ${theme.colors.thirdColor};
    color: ${theme.colors.textColor};
  }
`

export const StyledButton = styled.button`
  ${BaseButton}
`

export const StyledLink = styled.a`
  ${BaseButton}
`

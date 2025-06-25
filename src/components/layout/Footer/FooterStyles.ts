'use client'

import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.black};
  color: ${theme.colors.secondaryColor};
  padding: 12px 0px 38px 0px;
`

export const FooterContent = styled.div`
  padding: 0px 0px 12px 0px;
  border-bottom: 2px solid ${theme.colors.secondaryColor};
`

export const RowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`

export const SocialLinksItens = styled.a`
  transition: color 0.3s;
  cursor: pointer;

  svg {
    fill: ${theme.colors.secondaryColor};
    font-size: 32px;
  }

  &:hover {
    svg {
      fill: ${theme.colors.forthColor};
    }
  }
`

export const FooterText = styled.p`
  font-size: 1rem;
  margin: 12px 0;
  text-align: center;
`

export const FooterCopy = styled.h4``

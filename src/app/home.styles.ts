'use client'

import { StyledLink } from '@/components/ui/Button/ButtonStyles'
import { media, theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${media.sm} {
    padding: 0px;
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${media.sm} {
    width: 90%;
  }

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

export const HomeImage = styled(Image)`
  ${(media.sm, media.md)} {
    width: 100%;
    height: auto;
  }
`

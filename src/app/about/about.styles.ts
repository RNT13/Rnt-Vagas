'use client'

import { media, theme } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

export const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${(media.sm, media.md, media.lg)} {
    padding: 0px;
  }
`

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(media.sm, media.md, media.lg)} {
    width: 90%;
    flex-direction: column-reverse;
  }
`

export const AboutDescriptions = styled.div``

export const AboutTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    color: ${theme.colors.forthColor};
  }
`

export const AboutText = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  p {
    margin-bottom: 24px;
  }
`

export const AboutImage = styled(Image)`
  ${(media.sm, media.md)} {
    width: 100%;
    height: auto;
  }
`

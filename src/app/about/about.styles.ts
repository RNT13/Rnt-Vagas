'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const AboutContainer = styled.main`
  margin: 20px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

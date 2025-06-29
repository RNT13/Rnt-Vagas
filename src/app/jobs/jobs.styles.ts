'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const JobsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 30px 0;
`

export const JobsContent = styled.main``

export const JobsLayout = styled.div`
  background-color: ${theme.colors.secondaryColor};
  border-top: 3px solid ${theme.colors.forthColor};
`

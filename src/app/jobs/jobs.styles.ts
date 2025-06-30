'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const JobsContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;
`

export const JobsContent = styled.main``

export const JobsLayout = styled.div`
  background-color: ${theme.colors.secondaryColor};
  border-top: 3px solid ${theme.colors.forthColor};
`

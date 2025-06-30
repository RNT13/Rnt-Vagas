'use client'

import { media } from '@/styles/theme'
import styled from 'styled-components'

export const IdContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${media.sm} {
    padding: 0px;
  }
`

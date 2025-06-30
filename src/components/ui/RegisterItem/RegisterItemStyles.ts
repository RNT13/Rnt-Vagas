'use client'

import { media, theme, transitions } from '@/styles/theme'
import styled from 'styled-components'

export const RegisterItemContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.thirdColor};
  border-bottom: 5px solid ${theme.colors.primaryColor};
  transition: ${transitions.default};

  &:hover {
    border-bottom: 5px solid ${theme.colors.forthColor};
    transition: ${transitions.default};
  }

  ${media.sm} {
    padding: 8px;
    width: 100%;
  }
`

export const RegisterItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 0.9rem;
    color: ${theme.colors.gray2};
  }
`

'use client'

import { media, theme, transitions } from '@/styles/theme'
import Link from 'next/link'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 12px 0px 12px;

  ${(media.sm, media.md)} {
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
  }
`

export const NavbarContent = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

export const NavbarItem = styled(Link)`
  margin-left: 36px;
  text-decoration: none;
  color: ${theme.colors.textColor};
  transition: ${transitions.default};

  ${(media.sm, media.md)} {
    margin-top: 16px;
    margin-left: 24px;
    font-size: 0.875rem;
  }

  &:hover {
    background: linear-gradient(to bottom, transparent 90%, ${theme.colors.forthColor} 10%);
    transition: background-position 0.3s ease;
  }
`

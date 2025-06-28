'use client'

import { theme } from '@/styles/theme'
import Link from 'next/link'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 12px 0px 12px;
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
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to bottom, transparent 90%, ${theme.colors.forthColor} 10%);
    transition: background-position 0.3s ease;
  }
`

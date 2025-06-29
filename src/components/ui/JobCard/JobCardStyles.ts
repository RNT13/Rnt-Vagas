'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'
import { StyledLink } from '../Button/ButtonStyles'

export const JobCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  div:first-child {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 16px;

    ${StyledLink} {
      display: flex;
      align-items: center;
      font-size: 1rem;
      background-color: transparent;
      border: transparent;
      transition: all 0.3s ease;
      padding: 0;

      svg {
        margin-right: 8px;
      }

      &:hover {
        transition: all 0.3s ease;
        color: ${theme.colors.forthColor};
      }
    }
  }
`

export const JobCardContent = styled.div`
  padding: 12px 24px;
  background-color: ${theme.colors.thirdColor};
  border-radius: 8px;
`

export const JobCardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${theme.colors.red};
    border: 1px solid ${theme.colors.red};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.redHover};
      border-color: ${theme.colors.redHover};
      transition: all 0.3s ease;
    }
  }
`

export const JobTitle = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;

  h2 {
    font-size: 1.5rem;
    color: ${theme.colors.primaryColor};
  }
  p {
    font-size: 1rem;
    color: ${theme.colors.secondaryColor};
  }
`

export const JobTitleDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 8px;

  svg {
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4px;

    p {
      font-size: 0.875rem;
      color: ${theme.colors.secondaryColor};
    }
  }
`

export const JobCardBody = styled.div``

export const JobCardFooter = styled.div``

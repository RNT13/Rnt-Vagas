'use client'

import { media, theme, transitions } from '@/styles/theme'
import styled from 'styled-components'
import { StyledLink } from '../Button/ButtonStyles'

export const JobCardContainer = styled.article`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    color: ${theme.colors.primaryColor};
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.secondaryColor};
    font-weight: bolder;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    margin-bottom: 16px;

    ${media.sm} {
      font-size: 0.875rem;

      svg {
        font-size: 2rem;
      }
    }
  }

  .backButtonDiv {
    display: flex;
    justify-content: flex-start;
    margin: 16px 0;

    ${StyledLink} {
      display: flex;
      align-items: center;
      font-size: 1rem;
      background-color: transparent;
      border: transparent;
      transition: ${transitions.default};
      padding: 0;

      svg {
        margin-right: 8px;
      }

      &:hover {
        transition: ${transitions.default};

        color: ${theme.colors.forthColor};
      }
    }
  }
`

export const JobCardContent = styled.div`
  padding: 12px;
  margin-bottom: 24px;
  background-color: ${theme.colors.thirdColor};
  border-radius: 8px;
`

export const JobCardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  text-align: left;
  border-bottom: 1px solid ${theme.colors.secondaryColor};
  margin-bottom: 16px;

  button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${theme.colors.red};
    border: 1px solid ${theme.colors.red};
    transition: ${transitions.default};

    &:hover {
      background-color: ${theme.colors.redHover};
      border-color: ${theme.colors.redHover};
      transition: ${transitions.default};
    }
  }

  ${media.sm} {
    button {
      position: absolute;
      top: -50px;
      right: -10px;
    }
  }
`

export const JobCardTitle = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
`

export const JobCardTitleDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  div:last-child {
    display: flex;
    margin-left: 25px;
  }

  svg {
    margin-right: 8px;
    color: ${theme.colors.primaryColor};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 4px;
  }
`

export const JobCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  text-align: left;
  border-bottom: 1px solid ${theme.colors.secondaryColor};
  margin-bottom: 16px;
`

export const JobCardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  text-align: left;
`

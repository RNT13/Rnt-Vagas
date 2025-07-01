'use client'

import { media, theme, transitions } from '@/styles/theme'
import styled from 'styled-components'

export const JobsRegisterContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${media.sm} {
    padding: 0px;
  }
`

export const JobsRegisterContent = styled.div`
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 12px;
  }

  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const JobsRegisterForm = styled.div``

export const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: ${theme.colors.error};
  color: ${theme.colors.textColor};
  border: 1px solid ${theme.colors.red};

  svg {
    color: ${theme.colors.textColor};
    font-size: 30px;
  }
`

export const FormInput = styled.input`
  width: 40%;
  margin: 12px 0;
  padding: 8px;
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  border: none;
  border-radius: 4px;
`

export const FormSelect = styled.select`
  width: 40%;
  margin: 12px 0;
  padding: 8px;
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  border: none;
  border-radius: 4px;
`

export const FormTextArea = styled.textarea`
  width: 40%;
  height: 100px;
  margin: 12px 0;
  padding: 8px;
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  border: none;
  resize: none;
  border-radius: 4px;
`

export const ButtonDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 200px;
    background-color: ${theme.colors.thirdColor};
    transition: ${transitions.default};

    &:hover {
      background-color: ${theme.colors.forthColor};
      color: ${theme.colors.primaryColor};
      transition: ${transitions.default};
    }
  }
`

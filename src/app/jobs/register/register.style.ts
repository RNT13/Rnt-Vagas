'use client'

import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const JobsRegisterContainer = styled.main``

export const JobsRegisterContent = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const JobsRegisterForm = styled.form``

export const FormRow = styled.div``

export const FormInput = styled.input`
  width: 40%;
  margin: 12px 0;
`

export const FormTextArea = styled.textarea`
  width: 40%;
  height: 100px;
  margin: 12px 0;
  resize: none;
`

export const ButtonDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 200px;
    background-color: ${theme.colors.thirdColor};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.forthColor};
      color: ${theme.colors.primaryColor};
      transition: all 0.3s ease;
    }
  }
`

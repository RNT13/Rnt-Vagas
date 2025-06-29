'use client'

import { ButtonContainer, StyledButton, StyledLink } from './ButtonStyles'

interface ButtonProps {
  title: string
  href?: string
  children?: React.ReactNode
}

export const Button = ({ title, href, children }: ButtonProps) => {

  return (
    <ButtonContainer>
      {href ? (
        <StyledLink href={href}>
          {children}
          {title}
        </StyledLink>
      ) : (
        <StyledButton type="button">
          {children}
          {title}</StyledButton>
      )}
    </ButtonContainer>
  )
}

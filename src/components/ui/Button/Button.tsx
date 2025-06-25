'use client'

import { ButtonContainer, StyledButton, StyledLink } from './ButtonStyles'

interface ButtonProps {
  title: string
  href?: string
}

export const Button = ({ title, href }: ButtonProps) => {

  return (
    <ButtonContainer>
      {href ? (
        <StyledLink href={href}>{title}</StyledLink>
      ) : (
        <StyledButton type="button">{title}</StyledButton>
      )}
    </ButtonContainer>
  )
}

'use client'

import { ButtonContainer, StyledButton, StyledLink } from './ButtonStyles'

interface ButtonProps {
  title: string
  href?: string
  children?: React.ReactNode
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = ({ title, href, children, onClick, type, disabled }: ButtonProps) => {

  return (
    <ButtonContainer>
      {href ? (
        <StyledLink href={href}>
          {children}
          {title}
        </StyledLink>
      ) : (
        <StyledButton type={type} disabled={disabled} onClick={onClick}>
          {children}
          {title}
        </StyledButton>
      )}
    </ButtonContainer>
  )
}

'use client'

import { RegisterItemContainer, RegisterItemContent } from "./RegisterItemStyles";

interface RegisterItemProps {
  name: string
  label: string
  hint: string
  children: React.ReactNode
}

export default function RegisterItem({ name, label, hint, children }: RegisterItemProps) {
  return (
    <RegisterItemContainer className="container">
      <RegisterItemContent>
        <label htmlFor={name}>{label}</label>
        <h3>{hint}</h3>
      </RegisterItemContent>
      {children}
    </RegisterItemContainer>
  );
}

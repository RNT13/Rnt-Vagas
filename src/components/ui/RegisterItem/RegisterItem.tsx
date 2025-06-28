'use client'

import { RegisterItemContainer, RegisterItemContent } from "./RegisterItemStyles";

export default function RegisterItem({ children, name, description }: { children: React.ReactNode, name: string, description: string }) {
  return (
    <RegisterItemContainer className="container">
      <RegisterItemContent>
        <h2>{name}</h2>
        <h3>
          {description}
        </h3>
      </RegisterItemContent>
      {children}
    </RegisterItemContainer>
  )
}

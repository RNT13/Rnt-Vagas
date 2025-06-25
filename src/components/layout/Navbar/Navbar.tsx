'use client'

import Image from "next/image";
import { NavbarContainer, NavbarContent, NavbarItem } from "./NavbarStyles";

export default function Navbar() {
  return (
    <NavbarContainer className="container">
      <Image src="/rntVagasLogo.svg" alt="Logo" width={120} height={60} />
      <NavbarContent>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/about">Sobre</NavbarItem>
        <NavbarItem href="/jobs">Vagas</NavbarItem>
        <NavbarItem href="/jobs/register">Cadastrar Vagas</NavbarItem>
      </NavbarContent>
    </NavbarContainer>
  )
}

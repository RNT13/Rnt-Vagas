'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ColumnDiv, FooterContainer, FooterContent, FooterCopy, FooterText, RowDiv, SocialLinks, SocialLinksItens } from "./FooterStyles";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <FooterContainer >
      <FooterContent className="container">
        <RowDiv>
          <Image src="/rntVagasLogo.svg" alt="Logo" width={120} height={60} />
          <SocialLinks>
            <SocialLinksItens href="https://github.com/RNT13" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLinksItens>
            <SocialLinksItens href="https://www.linkedin.com/in/renato-luiz-0b072b247/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLinksItens>
            <SocialLinksItens href="https://www.instagram.com/renatominoita/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLinksItens>
          </SocialLinks>
        </RowDiv>
        <ColumnDiv>
          <FooterText>
            RNT Vagas conecta candidatos a empresas ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.
          </FooterText>
          <FooterCopy>
            &copy; {year ?? ""} RNT Projects. All rights reserved.
          </FooterCopy>
        </ColumnDiv>
      </FooterContent>
    </FooterContainer>
  )
}

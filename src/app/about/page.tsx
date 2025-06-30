'use client'

import { AboutContainer, AboutContent, AboutDescriptions, AboutImage, AboutText, AboutTitle } from "./about.styles";

export default function About() {
  return (
    <AboutContainer >
      <AboutContent className="container">
        <AboutDescriptions>
          <AboutTitle>Tudo o que você precisa <br /><span>você encontra aqui</span>!</AboutTitle>
          <AboutText>
            <p>O RntVagas é a solução ideal para profissionais de diferentes áreas que buscam novas oportunidades e para empresas que procuram talentos qualificados.</p>

            <p>Com uma plataforma intuitiva e fácil de navegar, conectamos candidatos e empresas de diversos setores, facilitando o encontro entre profissionais capacitados e as melhores vagas do mercado.</p>

            <p>Seja você um candidato em busca do próximo desafio ou uma empresa em busca de novos talentos, o RntVagas promove a conexão entre pessoas e organizações, impulsionando o crescimento e a inovação em vários segmentos.</p>
          </AboutText>
        </AboutDescriptions>
        <AboutImage src="/about.png" alt="Logo" width={600} height={600} />
      </AboutContent>
    </AboutContainer>
  )
}

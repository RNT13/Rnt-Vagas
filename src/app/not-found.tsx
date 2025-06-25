'use client'

import { Button } from "@/components/ui/Button/Button";
import { GlobalP, TitleH2 } from "@/styles/globalStyles";
import { NotFoundContainer, NotFoundContent, NotFoundImage } from "./not-found.styles";

export default function NotFound() {

  return (
    <NotFoundContainer className="container">
      < NotFoundContent >
        <TitleH2>Nada encontrado aqui...</TitleH2>
        <NotFoundImage src="404.png" alt="404" />
        <GlobalP>Desculpe, a página que você está procurando não foi encontrada.</GlobalP>
        <Button title="Voltar para a página inicial" href="/" />
      </NotFoundContent >
    </NotFoundContainer >
  )
}

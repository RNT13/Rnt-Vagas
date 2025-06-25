'use client';

import { Button } from "@/components/ui/Button/Button";
import { TitleH2 } from "@/styles/globalStyles";
import Image from "next/image";
import { HomeContainer, HomeContent } from "./home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent className="container">
        <TitleH2>Diga adeus ás longas buscas por uma vaga!</TitleH2>
        <Button title="Buscar uma vaga" href="/jobs" />
        <Image src="/homeImage.png" alt="homeImage" width={600} height={600} />
      </HomeContent>
    </HomeContainer>
  )
}

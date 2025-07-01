import { Button } from "@/components/ui/Button/Button";
import { HomeContainer, HomeContent, HomeImage } from "./home.styles";

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent className="container">
        <h2>Diga adeus às longas buscas por uma vaga!</h2>
        <Button title="Buscar uma vaga" href="/jobs" type="button" />
        <HomeImage src="/homeImage.png" alt="homeImage" width={600} height={600} />
      </HomeContent>
    </HomeContainer>
  )
}

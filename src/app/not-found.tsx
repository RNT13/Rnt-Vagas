import { Button } from "@/components/ui/Button/Button";
import { NotFoundContainer, NotFoundContent, NotFoundImage } from "./not-found.styles";

export default function NotFound() {

  return (
    <NotFoundContainer className="container">
      <NotFoundContent >
        <h2>Nada encontrado aqui...</h2>
        <NotFoundImage src="/404.png" alt="ilustração de pessoa com um megafone" width={600} height={600} />
        <p>Desculpe, a página que você está procurando não foi encontrada.</p>
        <Button title="Voltar para a página inicial" href="/" type="button" />
      </NotFoundContent >
    </NotFoundContainer >
  )
}

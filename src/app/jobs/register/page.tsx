'use client'

import { Button } from "@/components/ui/Button/Button";
import RegisterItem from "@/components/ui/RegisterItem/RegisterItem";
import { TitleH2 } from "@/styles/globalStyles";
import { ButtonDiv, FormInput, FormRow, FormTextArea, JobsRegisterContainer, JobsRegisterContent, JobsRegisterForm } from "./register.style";

export default function JobForm() {

  return (
    <JobsRegisterContainer className="container">
      <JobsRegisterContent>
        <TitleH2>Cadastrar nova vaga</TitleH2>
        <JobsRegisterForm >

          <FormRow>
            <RegisterItem
              name="Título da vaga"
              description="Ex: Desenvolvedor Front-end">
              <FormInput id="title" name="title" maxLength={50} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Nome da empresa"
              description="Ex: Desenvolvedor Front-end">
              <FormInput id="title" name="title" maxLength={50} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Site da empresa"
              description="Ex: Desenvolvedor Front-end">
              <FormInput id="title" name="title" maxLength={50} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Cidade"
              description="Ex: Desenvolvedor Front-end">
              <FormInput id="title" name="title" maxLength={50} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Período"
              description="Ex: Desenvolvedor Front-end">
              <FormInput id="title" name="title" maxLength={50} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Salário"
              description="Ex: Desenvolvedor Front-end">
              <FormInput id="title" name="title" maxLength={50} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Quantidade de vagas"
              description="Ex: Desenvolvedor Front-end">
              <FormInput id="title" name="title" maxLength={50} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Descrição da vaga"
              description="Ex: Desenvolvedor Front-end">
              <FormTextArea id="title" name="title" maxLength={300} />
            </RegisterItem>
          </FormRow>

          <FormRow>
            <RegisterItem
              name="Requisitos da vaga"
              description="Ex: Desenvolvedor Front-end">
              <FormTextArea id="title" name="title" maxLength={300} />
            </RegisterItem>
          </FormRow>

        </JobsRegisterForm>
        <ButtonDiv>
          <Button title="Cadastrar vaga" />
        </ButtonDiv>
      </JobsRegisterContent>
    </JobsRegisterContainer>
  );
}

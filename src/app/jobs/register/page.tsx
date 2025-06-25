'use client'

import { Button } from "@/components/ui/Button/Button";
import RegisterItem from "@/components/ui/RegisterItem/RegisterItem";
import { TitleH2 } from "@/styles/globalStyles";
import { FormInput, FormRow, FormTextArea, JobsRegisterContainer, JobsRegisterContent, JobsRegisterForm } from "./register.style";

export default function JobForm() {

  return (
    <JobsRegisterContainer className="container">
      <JobsRegisterContent>
        <TitleH2>Cadastrar nova vaga</TitleH2>
        <JobsRegisterForm >
          <FormRow>
            <RegisterItem
              name="Titulo da vaga"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormInput id="title" name="title" maxLength={50} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Nome da Empresa"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormInput id="title" name="title" maxLength={50} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Site da Empresa"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormInput id="title" name="title" maxLength={50} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Cidade"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormInput id="title" name="title" maxLength={50} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Periodo"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormInput id="title" name="title" maxLength={50} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Salario"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormInput id="title" name="title" maxLength={50} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Quantidade de vagas"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormInput id="title" name="title" maxLength={50} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Descrição da Vaga"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormTextArea id="title" name="title" maxLength={300} />}
            />
          </FormRow>
          <FormRow>
            <RegisterItem
              name="Requisitos da Vaga"
              description="Ex: Desenvolvedor Front-end"
              childrem={<FormTextArea id="title" name="title" maxLength={300} />}
            />
          </FormRow>
          <Button title="Cadastrar vaga" />
        </JobsRegisterForm>
      </JobsRegisterContent>
    </JobsRegisterContainer>
  );
}

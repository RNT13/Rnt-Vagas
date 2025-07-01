'use client'

import { Button } from "@/components/ui/Button/Button";
import RegisterItem from "@/components/ui/RegisterItem/RegisterItem";
import { createJob } from "@/lib/actions";
import { useActionState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import { ButtonDiv, Error, FormInput, FormSelect, FormTextArea, JobsRegisterContainer, JobsRegisterContent, JobsRegisterForm } from "./register.style";

export default function JobForm() {
  const [state, CreateJobAction, pending] = useActionState(createJob, null);

  return (
    <JobsRegisterContainer className="container">
      <form action={CreateJobAction}>
        <JobsRegisterContent>
          <h2>Cadastrar nova vaga</h2>
          <JobsRegisterForm >
            {state?.message && (
              <Error>
                <BiSolidErrorCircle /> {state.message}
              </Error >
            )}

            <RegisterItem
              name="title"
              label="Título da vaga"
              hint="Ex: Desenvolvedor Front-end"
            >
              <FormInput name="title" placeholder="Desenvolvedor Front-end" maxLength={50} />
            </RegisterItem>

            <RegisterItem
              name="company_website"
              label="Site da empresa"
              hint="Ex: https://www.codewave.com"
            >
              <FormInput name="company_website" placeholder="https://www.codewave.com" type="url" maxLength={100} required />
            </RegisterItem>

            <RegisterItem
              name="company"
              label="Nome da empresa"
              hint="Ex: Nome da empresa que está oferecendo a vaga"
            >
              <FormInput name="company" placeholder="Codewave" maxLength={50} />
            </RegisterItem>

            <RegisterItem
              name="city"
              label="Cidade"
              hint="Ex: Cidade onde a vaga está localizada"
            >
              <FormInput name="city" placeholder="São Paulo" maxLength={50} />
            </RegisterItem>

            <RegisterItem
              name="salary"
              label="Salário"
              hint="Ex: Salário da vaga"
            >
              <FormInput name="salary" placeholder="R$ 5.000,00" maxLength={50} />
            </RegisterItem>

            <RegisterItem
              name="schedule"
              label="Período"
              hint="Ex: Período de trabalho da vaga"
            >
              <FormSelect id="schedule" name="schedule" required defaultValue="">
                <option disabled value="">Selecione o período</option>
                <option value="part-time">Meio período</option>
                <option value="full-time">Tempo integral</option>
              </FormSelect>
            </RegisterItem>

            <RegisterItem
              name="number_of_positions"
              label="Quantidade de vagas"
              hint="Ex: Número de vagas disponíveis"
            >
              <FormInput name="number_of_positions" placeholder="5" type="number" maxLength={50} />
            </RegisterItem>

            <RegisterItem
              name="description"
              label="Descrição da vaga"
              hint="Ex: Descrição da vaga que está sendo oferecida"
            >
              <FormTextArea name="description" placeholder="Descrição da vaga" maxLength={300} />
            </RegisterItem>

            <RegisterItem
              name="requirements"
              label="Requisitos da vaga"
              hint="Ex: Requisitos para a vaga que está sendo oferecida"
            >
              <FormTextArea name="requirements" placeholder="Requisitos para a vaga" maxLength={300} />
            </RegisterItem>

          </JobsRegisterForm>
          <ButtonDiv>
            <Button disabled={pending} type="submit" title={pending ? "Cadastrando..." : "Cadastrar vaga"} />
          </ButtonDiv>
        </JobsRegisterContent>
      </form>
    </JobsRegisterContainer>
  );
}


'use client'

import JobItem from "@/components/ui/JobItem/JobItem";
import { TitleH2 } from "@/styles/globalStyles";
import { JobsContainer, JobsContent } from "./jobs.styles";

const job = {
  id: "1",
  title: "Desenvolvedor Front-end",
  company: "Google",
  city: "São Paulo",
  salary: "R$ 10.000,00"
}

export default function Jobs() {
  return (
    <JobsContainer className="container">
      <JobsContent >
        <TitleH2>Todas as vagas</TitleH2>
        <div>
          <JobItem job={job} />
          <JobItem job={job} />
          <JobItem job={job} />
          <JobItem job={job} />
          <JobItem job={job} />
        </div>
      </JobsContent>
    </JobsContainer>
  )
}

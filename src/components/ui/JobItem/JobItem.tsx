'use client'

import { Button } from "@/components/ui/Button/Button";
import { JobItemContainer, JobItemContent } from "./JobItemStyles";

type Job = {
  id: string,
  title: string,
  company: string,
  city: string,
  salary: string
}

interface jobItemProps {
  job: Job
}

export default function JobItem({ job }: jobItemProps) {
  return (
    <JobItemContainer className="container">
      <JobItemContent>
        <h2>{job.title}</h2>
        <h4>{job.company}</h4>
        <h4>{job.city}</h4>
        <h4>{job.salary}</h4>
        <Button title="Ver vaga" />
      </JobItemContent>
    </JobItemContainer>
  )
}

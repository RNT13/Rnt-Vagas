'use client'

import { Button } from "@/components/ui/Button/Button";
import { Job } from "@/types/types";
import { JobItemContainer, JobItemContent } from "./JobItemStyles";

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
        <Button href={`/jobs/${job.id}`} title="Ver vaga" />
      </JobItemContent>
    </JobItemContainer>
  )
}

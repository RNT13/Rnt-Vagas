import JobItem from "@/components/ui/JobItem/JobItem";
import { Job } from "@/types/types";
import { JobsContainer, JobsContent } from "./jobs.styles";

export const dynamic = 'force-dynamic'

async function fetchJobs() {
  const res = await fetch('http://apis.codante.io/api/job-board/jobs')

  if (!res.ok) {
    throw new Error('Ops... Algo deu errado')
  }

  const json = await res.json()
  const jobs: Job[] = json.data
  return jobs
}

export default async function Jobs() {
  const jobs = await fetchJobs()

  return (
    <JobsContainer className="container">
      <JobsContent >
        <h2>Todas as vagas</h2>
        <div>
          {jobs.map(job => (
            <JobItem key={job.id} job={job} />
          ))}
        </div>
      </JobsContent>
    </JobsContainer>
  )
}

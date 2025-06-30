'use server'

import NotFound from "@/app/not-found";
import JobCard from "@/components/ui/JobCard/JobCard";
import { TitleH2 } from "@/styles/globalStyles";
import { IdContainer } from "./id.Styles";

async function fetchJob(jobId: string) {
  const res = await fetch(`http://apis.codante.io/api/job-board/jobs/${jobId}`)
  if (!res.ok) return undefined
  const data = await res.json()
  return data.data
}

export default async function JobId({ params }: { params: { id: string } }) {
  const jobId = (await params).id
  const job = await fetchJob(jobId)

  if (!job) {
    NotFound()
  }

  return (
    <IdContainer className="container">
      <TitleH2>
        <JobCard job={job} />
      </TitleH2>
    </IdContainer>
  )
}

import JobCard from '@/components/ui/JobCard/JobCard'
import { Job } from '@/types/types'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { IdContainer } from './id.Styles'

async function fetchJob(id: string): Promise<Job | null> {
  const res = await fetch(`https://apis.codante.io/api/job-board/jobs/${id}`)
  if (!res.ok) return null
  const data = await res.json()
  return data.data
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { id } = await params
  const job = await fetchJob(id)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: job?.title ?? 'Vaga não encontrada',
    description: job?.description,
    openGraph: {
      images: ['/default-image.png', ...previousImages],
    },
  }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const job = await fetchJob(id)

  if (!job) return notFound()

  return (
    <IdContainer className="container">
      <JobCard job={job} />
    </IdContainer>
  )
}

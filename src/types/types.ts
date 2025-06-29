export type Job = {
  id: string
  title: string
  company: string
  city: string
  salary: string
  company_website: string
  schedule: 'part-time' | 'full time' | 'contract' | 'internship'
  number_of_positions: number
  description: string
  requirements: string
}

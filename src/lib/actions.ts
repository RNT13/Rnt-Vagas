'use server'

import { redirect } from 'next/navigation'

export async function deleteJob(formData: FormData) {
  const jobId = formData.get('Id')

  await fetch(`https://apis.codante.io/api/job-board/jobs/${jobId}`, { method: 'DELETE' })

  redirect('/jobs')
}

export async function createJob(_state: unknown, formData: FormData) {
  const rawData = Object.fromEntries(formData)

  const payload = {
    ...rawData,
    number_of_positions: Number(rawData.number_of_positions)
  }

  try {
    const response = await fetch('https://apis.codante.io/api/job-board/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      return {
        error: true,
        message: (await response.json()).message
      }
    }

    redirect('/jobs')
  } catch (error) {
    throw error
  }
}

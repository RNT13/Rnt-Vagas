'use client'

import { FaCity } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

import { TiBusinessCard } from "react-icons/ti";



import { Button } from "@/components/ui/Button/Button";
import { Job } from "@/types/types";
import { JobItemContainer, JobItemContent, JobItemDescription } from "./JobItemStyles";

interface jobItemProps {
  job: Job
}

export default function JobItem({ job }: jobItemProps) {
  return (
    <JobItemContainer className="container">
      <JobItemContent>
        <JobItemDescription>
          <h2> <IoBusiness size={30} /> {job.title}</h2>
          <h2> <TiBusinessCard /> {job.company}</h2>
          <h2> <FaCity /> {job.city}</h2>
          <h2> <MdOutlineAttachMoney /> {job.salary}</h2>
        </JobItemDescription>
        <Button href={`/jobs/${job.id}`} title="Ver vaga" type="button" />
      </JobItemContent>
    </JobItemContainer>
  )
}

'use client'

import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaBusinessTime } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";

import { deleteJob } from "@/lib/actions";
import { Job } from "@/types/types";
import { Button } from "../Button/Button";
import { JobCardBody, JobCardContainer, JobCardContent, JobCardFooter, JobCardHeader, JobCardTitle, JobCardTitleDetails } from "./JobCardStyles";

type JobCardProps = {
  job: Job;
};

export default function JobCard({ job }: JobCardProps) {

  return (
    <JobCardContainer className="container">
      <div className="backButton">
        <Button href="/jobs" title={"Todas as vagas"} type="button">
          <FaArrowLeft />
        </Button>
      </div>
      <JobCardContent>
        <JobCardHeader>
          <JobCardTitle>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </JobCardTitle>
          <JobCardTitleDetails>
            <div>
              <p>
                <CiLocationOn />
                {job.city}
              </p>
              <p>
                <MdOutlineAttachMoney />
                {job.salary}
              </p>
            </div>
            <div>
              <p>
                <FaBusinessTime />
                {job.schedule}
              </p>
              <p>
                <FaPeopleGroup />
                {job.number_of_positions} vaga{job.number_of_positions > 1 ? "s" : ""}
              </p>
            </div>
          </JobCardTitleDetails>
          <form action={deleteJob}>
            <input type="hidden" name="Id" value={job.id} />
            <Button type="submit" title="Apagar vaga"></Button>
          </form>
        </JobCardHeader>
        <JobCardBody>
          <h2>Descrição da  vaga</h2>
          <p>
            {job.description}
          </p>
        </JobCardBody>
        <JobCardFooter>
          <h2>Requisitos</h2>
          <p>
            {job.requirements}
          </p>
        </JobCardFooter>
      </JobCardContent>
    </JobCardContainer>
  );
}

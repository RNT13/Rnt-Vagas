import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaBusinessTime } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";

import { Button } from "../Button/Button";
import { JobCardBody, JobCardContainer, JobCardContent, JobCardFooter, JobCardHeader, JobTitle, JobTitleDetails } from "./JobCardStyles";

export default function JobCard() {
  return (
    <JobCardContainer className="container">
      <div>
        <Button href="/jobs" title={"Todas as vagas"}>
          <FaArrowLeft />
        </Button>
      </div>
      <JobCardContent>
        <JobCardHeader>
          <JobTitle>
            <h2>Nome da vaga</h2>
            <p>Nome da empresa</p>
          </JobTitle>
          <JobTitleDetails>
            <div>
              <p>
                <CiLocationOn />
                Localização
              </p>
              <p>
                <MdOutlineAttachMoney />
                Salário
              </p>
            </div>
            <div>
              <p>
                <FaBusinessTime />
                Tipo de contrato
              </p>
              <p>
                <FaPeopleGroup />
                Número de vagas
              </p>
            </div>
          </JobTitleDetails>
          <Button title={"Apagar vaga"}></Button>
        </JobCardHeader>
        <JobCardBody>

        </JobCardBody>
        <JobCardFooter>

        </JobCardFooter>
      </JobCardContent>
    </JobCardContainer>
  );
}

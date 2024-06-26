import {JobStatus} from "../../../enums/jobs/job.enum";

export interface JobResponse {
  id: number;
  userId: number;
  title: string;
  company: string;
  vacancy: number;
  description: string;
  division: string;
  location: string;
  jobType: string;
  jobExperience: string;
  salary: string;
  jobDeadline: Date;
  status: JobStatus;
}

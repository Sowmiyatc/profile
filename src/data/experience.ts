import { accomplishments } from "./accomplishments";

export type Experience = {
  company: string;
  role: string;
  duration: string;
  logo?: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  kind?: "work" | "education";
};

export const experiences: Experience[] = [
  {
    kind: "work",
    company: "Cognizant Technology Solutions",
    role: "Senior Data Engineer",
    duration: "Oct 2020 — Present",
    responsibilities: [
      "Own end-to-end Azure Data Factory pipelines ingesting from SQL Server, REST APIs, and flat files into curated layers for analytics and reporting.",
      "Partner with client teams on SLAs, data quality checks, partitioning strategy, and operational monitoring for production workloads.",
    ],
    achievements: [...accomplishments],
    technologies: [
      "Azure Data Factory",
      "SQL Server",
      "REST APIs",
      "ETL",
      "Azure",
      "Data pipelines",
    ],
  },
  {
    kind: "education",
    company: "PSNA College of Engineering and Technology",
    role: "BE — Electronics and Communication Engineering",
    duration: "Degree program",
    responsibilities: [
      "Undergraduate program in electronics and communication engineering, building a strong foundation in systems, signals, and analytical problem-solving applied to data and integration work today.",
    ],
    achievements: [],
    technologies: [],
  },
];

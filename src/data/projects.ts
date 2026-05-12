export type Project = {
  title: string;
  description: string;
  tech: string[];
  challenges: string[];
  architecture: string[];
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Azure Data Lake Ingestion",
    description:
      "End-to-end ingestion with Azure Data Factory from SQL Server, REST APIs, and flat files into landing and curated zones for downstream analytics.",
    tech: ["Azure Data Factory", "SQL Server", "REST APIs", "Azure Data Lake", "Python"],
    challenges: [
      "Reliable handling of late-arriving files and API rate limits without blocking dependent pipelines.",
      "Schema drift and encoding issues across heterogeneous sources.",
    ],
    architecture: [
      "Parameterized linked services and datasets per environment; event-based and tumbling-window triggers.",
      "Bronze landing in ADLS with idempotent copy patterns and metadata-driven pipeline templates.",
    ],
  },
  {
    title: "Oracle / SQL Server migration ETL",
    description:
      "Lift-and-shift plus refactor of legacy stored procedures into modular Python and Spark jobs with audit parity.",
    tech: ["Oracle", "SQL Server", "Python", "Unix scripting", "Azure Data Factory"],
    challenges: [
      "Reconciling row counts and business totals between legacy and target systems during cutover.",
      "Scheduling dependencies across mixed on-prem and cloud runtimes.",
    ],
    architecture: [
      "Staging databases for checksum validation; controlled cutover windows with rollback scripts.",
      "Centralized configuration for connection strings and batch windows per region.",
    ],
  },
];

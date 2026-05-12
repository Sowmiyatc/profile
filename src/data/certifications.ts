export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  { name: "DP-900: Microsoft Azure Data Fundamentals", issuer: "Microsoft" },
  { name: "Databricks Certified Data Engineer Associate", issuer: "Databricks" },
];

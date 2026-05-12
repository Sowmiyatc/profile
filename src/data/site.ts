function publicAsset(relativeToPublic: string): string {
  const path = relativeToPublic.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${path}`;
}

export const site = {
  name: "Sowmiya T C",
  role: "Senior Data Engineer",
  employer: "Cognizant Technology Solutions",
  /** Shown in hero kicker (e.g. before role · employer). */
  experienceTenure: "5 years 7 months",
  tagline:
    "Designing and operating enterprise data pipelines on Azure—trusted ETL, Spark on Databricks, and analytics-ready datasets for stakeholders.",
  summary:
    "Senior Data Engineer at Cognizant Technology Solutions with 5 years and 7 months of professional experience, helping clients modernize analytics platforms. I work across Azure Data Factory, Databricks, Snowflake, and relational warehouses—turning operational data into governed, performant pipelines and clear Power BI insights.",
  email: "sowmikarthik2323@gmail.com",
  linkedin: "https://www.linkedin.com/in/sowmiya-t-c-031287184/",
  resumePath: publicAsset("Sowmiya_TC_Resume.pdf"),
  profileImage: publicAsset("profile.png"),
  coreTech: ["Azure Data Factory", "Databricks", "PySpark", "Snowflake", "SQL", "Power BI"],
  /** Short labels for animated chips in the hero card */
  floatingTechBadges: ["ADF", "PySpark", "SQL", "Python", "Snowflake", "Power BI"],
} as const;

export type SkillCategory = {
  title: string;
  items: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Microsoft Azure & orchestration",
    items: [
      { name: "Azure Data Factory", level: 92 },
      { name: "Azure Databricks", level: 90 },
    ],
  },
  {
    title: "Languages & scripting",
    items: [
      { name: "PySpark", level: 88 },
      { name: "SQL", level: 94 },
      { name: "Unix scripting", level: 86 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Data platforms",
    items: [
      { name: "Snowflake", level: 88 },
      { name: "Oracle", level: 85 },
      { name: "SQL Server", level: 87 },
    ],
  },
  {
    title: "BI & engineering practices",
    items: [
      { name: "Power BI", level: 70 },
      { name: "ETL development", level: 92 },
      { name: "Data pipeline design", level: 91 },
    ],
  },
];

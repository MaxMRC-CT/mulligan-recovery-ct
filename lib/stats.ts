export type StatItem = {
  id: string;
  label: string;
  value: string;
  subtext: string;
  source: {
    name: string;
    link: string;
  };
};

export const stats: StatItem[] = [
  {
    id: "ct-overdose-deaths-2024",
    label: "CT overdose deaths in 2024",
    value: "990",
    subtext: "Connecticut confirmed 990 overdose deaths in 2024, which highlights the need for accessible care options.",
    source: {
      name: "CT Department of Public Health, 2024 Drug Overdose Report (via Office of the Governor, June 2025)",
      link: "https://portal.ct.gov/governor/news/press-releases/2025/06-2025/governor-lamont-announces-dramatic-decline-in-overdose-deaths-in-connecticut"
    }
  },
  {
    id: "ct-fentanyl-involved-2024",
    label: "Fentanyl was involved in CT deaths",
    value: "76%",
    subtext: "About three in four overdose deaths in 2024 involved fentanyl, which is why timely placement matters.",
    source: {
      name: "CT Department of Public Health, Opioid and Drug Overdose Statistics",
      link: "https://portal.ct.gov/dph/health-education-management--surveillance/the-office-of-injury-prevention/opioid-and-drug-overdose-statistics"
    }
  },
  {
    id: "gnh-nonfatal-od-2018-2022",
    label: "Nonfatal overdoses in the New Haven area (2018-2022)",
    value: "5,504",
    subtext: "From 2018 to 2022, 5,504 accidental nonfatal overdoses were recorded in New Haven and nearby towns.",
    source: {
      name: "DataHaven, Overdose Data to Action: 2023 Update",
      link: "https://ctdatahaven.org/sites/ctdatahaven/files/od2a_2024_final.pdf"
    }
  }
];

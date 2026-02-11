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
    value: "989",
    subtext: "Connecticut reported 989 overdose deaths in 2024, which highlights the need for accessible care options.",
    source: {
      name: "CT DPH Placeholder Source",
      link: "https://portal.ct.gov/DPH"
    }
  },
  {
    id: "ct-fentanyl-involved-2024",
    label: "Fentanyl was involved in CT deaths",
    value: "76.6%",
    subtext: "About three in four overdose deaths in 2024 involved fentanyl, which is why timely placement matters.",
    source: {
      name: "CT Opioid Data Placeholder",
      link: "https://portal.ct.gov/opioids"
    }
  },
  {
    id: "gnh-nonfatal-od-2018-2022",
    label: "Nonfatal overdoses in Greater New Haven (2018-2022)",
    value: "5,504",
    subtext: "From 2018 to 2022, 5,504 nonfatal overdoses were recorded in Greater New Haven.",
    source: {
      name: "Regional Overdose Dashboard Placeholder",
      link: "https://www.datahaven.org"
    }
  }
];

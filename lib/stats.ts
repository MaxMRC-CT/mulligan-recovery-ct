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
    id: "ct-change-2024-vs-2023",
    label: "Change from 2023 to 2024",
    value: "-26.1%",
    subtext: "Deaths declined compared with 2023, showing progress while reinforcing the need for steady support.",
    source: {
      name: "CT Overdose Trends Placeholder",
      link: "https://www.ctdata.org"
    }
  },
  {
    id: "gnh-fentanyl-deaths",
    label: "Fentanyl deaths per month in Greater New Haven",
    value: "~11/month",
    subtext: "Greater New Haven still sees around 11 fentanyl-related deaths each month on average.",
    source: {
      name: "Greater New Haven Health Data Placeholder",
      link: "https://www.newhavenct.gov"
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

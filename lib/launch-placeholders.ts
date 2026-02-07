export const credentialPlaceholders = [
  { label: "State Facility License", value: "Pending final legal-approved publication" },
  { label: "Accreditation Status", value: "Pending verification and badge asset" },
  { label: "Medical Director", value: "Name and credentials pending release approval" },
  { label: "Clinical Director", value: "Name and credentials pending release approval" }
];

export const payerPlaceholders = [
  {
    payer: "Commercial PPO",
    status: "Placeholder",
    effectiveDate: "To be confirmed",
    notes: "Contract and authorization pathways pending final review"
  },
  {
    payer: "Commercial HMO",
    status: "Placeholder",
    effectiveDate: "To be confirmed",
    notes: "Network participation may vary by product"
  },
  {
    payer: "Medicaid Pathways",
    status: "Placeholder",
    effectiveDate: "To be confirmed",
    notes: "Eligibility and referral conditions apply"
  },
  {
    payer: "Out-of-Network",
    status: "Case-by-case",
    effectiveDate: "Current",
    notes: "Coverage estimates provided before admission when available"
  }
];

export const outcomesPlaceholders = [
  {
    metric: "30-Day Engagement",
    definition: "Percentage of discharged residents linked to continuing care within 30 days",
    status: "Baseline data collection in progress"
  },
  {
    metric: "Completion Rate",
    definition: "Percentage of residents meeting individualized treatment goals during stay",
    status: "Reporting framework in setup"
  },
  {
    metric: "Family Session Participation",
    definition: "Percentage of authorized cases with at least one structured family session",
    status: "Initial benchmark pending"
  }
];

export interface FormData {
  // Company and context
  companyName: string;
  role: string;
  companyMission: string;
  mainProducts: string;
  customerSegments: string;
  competitors: string;
  marketTrends: string;
  
  // Business goals and challenges
  topGoals: string;
  biggestChallenges: string;
  greatestImpact: string;
  actionsTaken: string;
  successDefinition: string;
  
  // Opportunities and hypotheses
  missedOpportunities: string;
  unmetNeeds: string;
  desiredBreakthrough: string;
  
  // Users and stakeholders
  mainUsers: string;
  keyStakeholders: string;
  internalTeams: string;
  additionalInvolvement: string;
  
  // Current efforts and resources
  previousResearch: string;
  existingData: string;
  internalResources: string;
  constraints: string;
  
  // Expectations and collaboration
  expectations: string;
  sessionSuccess: string;
  communicationPreference: string;
  concerns: string;
}

export type FormStep = 1 | 2 | 3 | 4 | 5 | 6;

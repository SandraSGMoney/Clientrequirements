-- Create the client_discovery_briefs table
CREATE TABLE client_discovery_briefs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Company and context
  company_name TEXT,
  role TEXT,
  company_mission TEXT,
  main_products TEXT,
  customer_segments TEXT,
  competitors TEXT,
  market_trends TEXT,
  
  -- Business goals and challenges
  top_goals TEXT,
  biggest_challenges TEXT,
  greatest_impact TEXT,
  actions_taken TEXT,
  success_definition TEXT,
  
  -- Opportunities and hypotheses
  missed_opportunities TEXT,
  unmet_needs TEXT,
  desired_breakthrough TEXT,
  
  -- Users and stakeholders
  main_users TEXT,
  key_stakeholders TEXT,
  internal_teams TEXT,
  additional_involvement TEXT,
  
  -- Current efforts and resources
  previous_research TEXT,
  existing_data TEXT,
  internal_resources TEXT,
  constraints TEXT,
  
  -- Expectations and collaboration
  expectations TEXT,
  session_success TEXT,
  communication_preference TEXT,
  concerns TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE client_discovery_briefs ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts from anyone (adjust based on your needs)
CREATE POLICY "Allow public inserts" ON client_discovery_briefs
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create a policy to allow authenticated users to read all briefs
CREATE POLICY "Allow authenticated reads" ON client_discovery_briefs
  FOR SELECT TO authenticated
  USING (true);

-- Optional: Create an index on created_at for faster queries
CREATE INDEX idx_client_discovery_briefs_created_at ON client_discovery_briefs(created_at DESC);

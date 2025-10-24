# Client Discovery Brief - Multi-Step Form

A professional, polished multi-step form application for collecting client discovery information before workshops. Built with React, TypeScript, and Supabase.

## Features

- ✨ 6-step form with progress indicator
- 🎨 Modern, professional UI matching your design
- 💾 Supabase integration for data persistence
- 📱 Fully responsive design
- ⚡ Built with Vite for fast development

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Supabase account and project

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project's SQL Editor
3. Run the following SQL to create the table:

```sql
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
```

### 3. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

2. Fill in your Supabase credentials in `.env`:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under "API".

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Form Sections

The form is divided into 6 sections:

1. **Company and Context** - Basic company information and market positioning
2. **Business Goals and Challenges** - Top goals and current obstacles
3. **Opportunities and Hypotheses** - Areas for growth and innovation
4. **Users and Stakeholders** - Key people involved in the project
5. **Current Efforts and Resources** - Existing work and available assets
6. **Expectations and Collaboration** - How you want to work together

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
Innovation HUB/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── CompanySection.tsx
│   │   │   ├── GoalsSection.tsx
│   │   │   ├── OpportunitiesSection.tsx
│   │   │   ├── UsersSection.tsx
│   │   │   ├── ResourcesSection.tsx
│   │   │   └── ExpectationsSection.tsx
│   │   ├── ProgressIndicator.tsx
│   │   └── ProgressIndicator.css
│   ├── config/
│   │   └── supabase.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Customization

### Styling

The main styles are in:
- `src/index.css` - Global styles
- `src/App.css` - Form container and component styles
- `src/components/ProgressIndicator.css` - Progress indicator styles

### Colors

The color scheme matches your design:
- Background: `#1a1d29`
- Input background: `#252836`
- Primary accent: `#f5a623` (orange)
- Success: `#4caf50` (green)

### Form Fields

To add or modify form fields, update:
1. `src/types.ts` - Add the field to the `FormData` interface
2. The relevant section component in `src/components/sections/`
3. The Supabase table schema

## Support

For issues or questions, please refer to the documentation or contact support.

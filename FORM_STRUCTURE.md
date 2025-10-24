# Form Structure Overview

This document provides a visual overview of the form structure and field organization.

## Form Flow

```
┌─────────────────────────────────────────────────────────┐
│                    [☰]  Form Header  [×]                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ●──────●──────○──────○──────○──────○                  │
│  Company Goals  Opps  Users  Res.  Expect.              │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│                    Form Content                          │
│                  (Current Section)                       │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│           [Back]              [Continue]                 │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## Section Breakdown

### Step 1: Company and Context (7 fields)
```
┌─────────────────────────────────────┐
│ Client Discovery Brief              │
│ Pre-session questionnaire           │
├─────────────────────────────────────┤
│ COMPANY AND CONTEXT                 │
│                                     │
│ 1. Company name          [_______]  │
│ 2. Your role/department  [_______]  │
│ 3. Company mission       [_______]  │
│ 4. Main products         [_______]  │
│ 5. Customer segments     [_______]  │
│ 6. Key competitors       [_______]  │
│ 7. Market trends         [_______]  │
└─────────────────────────────────────┘
```

**Fields:**
- Company name (text input)
- Role/department (text input)
- Company mission (textarea)
- Main products/services (textarea)
- Primary customer segments (textarea)
- Key competitors (textarea)
- Major market trends (textarea)

---

### Step 2: Business Goals and Challenges (5 fields)
```
┌─────────────────────────────────────┐
│ Business Goals and Challenges       │
├─────────────────────────────────────┤
│ 1. Top 3 goals (6-12m)   [_______]  │
│ 2. Biggest challenges    [_______]  │
│ 3. Greatest impact       [_______]  │
│ 4. Actions taken         [_______]  │
│ 5. Success definition    [_______]  │
└─────────────────────────────────────┘
```

**Fields:**
- Top three business goals (textarea)
- Biggest challenges (textarea)
- Challenge with greatest impact (textarea)
- Actions already taken (textarea)
- What success looks like (textarea)

---

### Step 3: Opportunities and Hypotheses (3 fields)
```
┌─────────────────────────────────────┐
│ Opportunities and Hypotheses        │
├─────────────────────────────────────┤
│ 1. Missed opportunities  [_______]  │
│ 2. Unmet customer needs  [_______]  │
│ 3. Desired breakthrough  [_______]  │
└─────────────────────────────────────┘
```

**Fields:**
- Areas of missed opportunities (textarea)
- Unmet customer needs/pain points (textarea)
- Desired breakthrough (textarea)

---

### Step 4: Users and Stakeholders (4 fields)
```
┌─────────────────────────────────────┐
│ Users and Stakeholders              │
├─────────────────────────────────────┤
│ 1. Main users            [_______]  │
│ 2. Key stakeholders      [_______]  │
│ 3. Internal teams        [_______]  │
│ 4. Additional people     [_______]  │
└─────────────────────────────────────┘
```

**Fields:**
- Main users/beneficiaries (textarea)
- Key stakeholders (textarea)
- Internal teams participating (textarea)
- Additional people to involve (textarea)

---

### Step 5: Current Efforts and Resources (4 fields)
```
┌─────────────────────────────────────┐
│ Current Efforts and Resources       │
├─────────────────────────────────────┤
│ 1. Previous research     [_______]  │
│ 2. Existing data         [_______]  │
│ 3. Internal resources    [_______]  │
│ 4. Constraints           [_______]  │
└─────────────────────────────────────┘
```

**Fields:**
- Previous research/pilots/studies (textarea)
- Existing data sources/reports (textarea)
- Internal resources/teams (textarea)
- Time/budget constraints (textarea)

---

### Step 6: Expectations and Collaboration (4 fields)
```
┌─────────────────────────────────────┐
│ Expectations and Collaboration      │
├─────────────────────────────────────┤
│ 1. Expectations          [_______]  │
│ 2. Session success       [_______]  │
│ 3. Communication prefs   [_______]  │
│ 4. Concerns/risks        [_______]  │
│                                     │
│              [Submit]               │
└─────────────────────────────────────┘
```

**Fields:**
- Collaboration expectations (textarea)
- First session success criteria (textarea)
- Communication preferences (textarea)
- Specific concerns/risks (textarea)

---

## Field Summary

### Total Fields: 27

**By Input Type:**
- Text inputs: 2 (company name, role)
- Textareas: 25 (all other fields)

**By Section:**
- Company & Context: 7 fields
- Goals & Challenges: 5 fields
- Opportunities: 3 fields
- Users & Stakeholders: 4 fields
- Resources: 4 fields
- Expectations: 4 fields

## Data Model

### FormData Interface
```typescript
interface FormData {
  // Company and context (7)
  companyName: string;
  role: string;
  companyMission: string;
  mainProducts: string;
  customerSegments: string;
  competitors: string;
  marketTrends: string;
  
  // Business goals and challenges (5)
  topGoals: string;
  biggestChallenges: string;
  greatestImpact: string;
  actionsTaken: string;
  successDefinition: string;
  
  // Opportunities and hypotheses (3)
  missedOpportunities: string;
  unmetNeeds: string;
  desiredBreakthrough: string;
  
  // Users and stakeholders (4)
  mainUsers: string;
  keyStakeholders: string;
  internalTeams: string;
  additionalInvolvement: string;
  
  // Current efforts and resources (4)
  previousResearch: string;
  existingData: string;
  internalResources: string;
  constraints: string;
  
  // Expectations and collaboration (4)
  expectations: string;
  sessionSuccess: string;
  communicationPreference: string;
  concerns: string;
}
```

## Progress Indicator States

### Step 1 (Active)
```
●──────○──────○──────○──────○──────○
```

### Step 3 (In Progress)
```
✓──────✓──────●──────○──────○──────○
```

### Step 6 (Final)
```
✓──────✓──────✓──────✓──────✓──────●
```

### Completed
```
✓──────✓──────✓──────✓──────✓──────✓
```

## UI Components

### Color States

**Input Fields:**
- Default: `#252836` background, `#2d3142` border
- Focus: `#2a2d3e` background, `#f5a623` border
- Hover: Subtle background change

**Buttons:**
- Primary: `#f5a623` background (orange)
- Secondary: Transparent with `#2d3142` border
- Disabled: 60% opacity

**Progress Indicator:**
- Completed: `#4caf50` (green) with checkmark
- Active: `#f5a623` (orange) with glow
- Pending: `#252836` with gray border

## Responsive Breakpoints

### Desktop (> 768px)
- Form width: 650px max
- Two-column button layout
- Full-size progress indicator

### Mobile (≤ 768px)
- Form width: 100%
- Single-column button layout
- Compact progress indicator
- Smaller fonts and spacing

## Accessibility Features

- ✅ Semantic HTML labels
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ ARIA-compliant structure
- ✅ Readable font sizes
- ✅ High contrast ratios

## Form Validation (Future)

Potential validation rules:
```
Step 1:
  - companyName: required, min 2 chars
  - role: required

Step 2:
  - topGoals: required
  - biggestChallenges: required

Step 6:
  - expectations: required
  - sessionSuccess: required
```

## Success Screen

After submission:
```
┌─────────────────────────────────────┐
│                                     │
│              ┌───┐                  │
│              │ ✓ │                  │
│              └───┘                  │
│                                     │
│           Thank you!                │
│                                     │
│  Your client discovery brief has    │
│  been submitted successfully.       │
│                                     │
│  We'll review your responses and    │
│  be in touch soon.                  │
│                                     │
└─────────────────────────────────────┘
```

---

## Field Mapping (FormData → Database)

| FormData Property | Database Column | Type |
|------------------|-----------------|------|
| companyName | company_name | TEXT |
| role | role | TEXT |
| companyMission | company_mission | TEXT |
| mainProducts | main_products | TEXT |
| customerSegments | customer_segments | TEXT |
| competitors | competitors | TEXT |
| marketTrends | market_trends | TEXT |
| topGoals | top_goals | TEXT |
| biggestChallenges | biggest_challenges | TEXT |
| greatestImpact | greatest_impact | TEXT |
| actionsTaken | actions_taken | TEXT |
| successDefinition | success_definition | TEXT |
| missedOpportunities | missed_opportunities | TEXT |
| unmetNeeds | unmet_needs | TEXT |
| desiredBreakthrough | desired_breakthrough | TEXT |
| mainUsers | main_users | TEXT |
| keyStakeholders | key_stakeholders | TEXT |
| internalTeams | internal_teams | TEXT |
| additionalInvolvement | additional_involvement | TEXT |
| previousResearch | previous_research | TEXT |
| existingData | existing_data | TEXT |
| internalResources | internal_resources | TEXT |
| constraints | constraints | TEXT |
| expectations | expectations | TEXT |
| sessionSuccess | session_success | TEXT |
| communicationPreference | communication_preference | TEXT |
| concerns | concerns | TEXT |

**Note:** Database uses snake_case, FormData uses camelCase.

---

This structure provides a comprehensive, user-friendly experience for collecting detailed client discovery information.

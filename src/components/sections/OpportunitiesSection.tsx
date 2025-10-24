import { FormData } from '../../types';

interface OpportunitiesSectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

function OpportunitiesSection({ formData, updateFormData }: OpportunitiesSectionProps) {
  return (
    <div className="form-section">
      <h2 className="section-title">Opportunities and Hypotheses</h2>
      <p className="section-subtitle">
        Purpose: To explore areas of potential growth or innovation.
      </p>

      <div className="form-group">
        <label htmlFor="missedOpportunities">Are there areas where you believe your organisation may be missing opportunities?</label>
        <textarea
          id="missedOpportunities"
          value={formData.missedOpportunities}
          onChange={(e) => updateFormData('missedOpportunities', e.target.value)}
          placeholder="Describe potential missed opportunities..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="unmetNeeds">Have you identified any unmet customer needs or pain points?</label>
        <textarea
          id="unmetNeeds"
          value={formData.unmetNeeds}
          onChange={(e) => updateFormData('unmetNeeds', e.target.value)}
          placeholder="Describe unmet customer needs..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="desiredBreakthrough">If you could remove any barriers, what breakthrough would you most like to achieve?</label>
        <textarea
          id="desiredBreakthrough"
          value={formData.desiredBreakthrough}
          onChange={(e) => updateFormData('desiredBreakthrough', e.target.value)}
          placeholder="Describe your desired breakthrough..."
        />
      </div>
    </div>
  );
}

export default OpportunitiesSection;

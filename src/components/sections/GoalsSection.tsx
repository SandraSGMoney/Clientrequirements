import { FormData } from '../../types';

interface GoalsSectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

function GoalsSection({ formData, updateFormData }: GoalsSectionProps) {
  return (
    <div className="form-section">
      <h2 className="section-title">Business Goals and Challenges</h2>
      <p className="section-subtitle">
        Purpose: To identify what you wish to achieve and what obstacles stand in the way.
      </p>

      <div className="form-group">
        <label htmlFor="topGoals">What are your top three business goals for the next 6–12 months?</label>
        <textarea
          id="topGoals"
          value={formData.topGoals}
          onChange={(e) => updateFormData('topGoals', e.target.value)}
          placeholder="List your top three goals..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="biggestChallenges">What are the biggest challenges you are currently facing?</label>
        <textarea
          id="biggestChallenges"
          value={formData.biggestChallenges}
          onChange={(e) => updateFormData('biggestChallenges', e.target.value)}
          placeholder="Describe your biggest challenges..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="greatestImpact">Which of these challenges has the greatest impact on your business?</label>
        <textarea
          id="greatestImpact"
          value={formData.greatestImpact}
          onChange={(e) => updateFormData('greatestImpact', e.target.value)}
          placeholder="Identify the challenge with greatest impact..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="actionsTaken">What actions or initiatives have already been taken to address them?</label>
        <textarea
          id="actionsTaken"
          value={formData.actionsTaken}
          onChange={(e) => updateFormData('actionsTaken', e.target.value)}
          placeholder="Describe actions taken..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="successDefinition">What would success look like if we helped you resolve this challenge?</label>
        <textarea
          id="successDefinition"
          value={formData.successDefinition}
          onChange={(e) => updateFormData('successDefinition', e.target.value)}
          placeholder="Define what success looks like..."
        />
      </div>
    </div>
  );
}

export default GoalsSection;

import { FormData } from '../../types';

interface ExpectationsSectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

function ExpectationsSection({ formData, updateFormData }: ExpectationsSectionProps) {
  return (
    <div className="form-section">
      <h2 className="section-title">Expectations and Collaboration</h2>
      <p className="section-subtitle">
        Purpose: To align on how we will work together.
      </p>

      <div className="form-group">
        <label htmlFor="expectations">What do you expect from this collaboration?</label>
        <textarea
          id="expectations"
          value={formData.expectations}
          onChange={(e) => updateFormData('expectations', e.target.value)}
          placeholder="Describe your expectations..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="sessionSuccess">What would make the first session a success for you?</label>
        <textarea
          id="sessionSuccess"
          value={formData.sessionSuccess}
          onChange={(e) => updateFormData('sessionSuccess', e.target.value)}
          placeholder="Define session success..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="communicationPreference">How do you prefer to communicate and collaborate (workshops, progress updates, asynchronous reviews, etc.)?</label>
        <textarea
          id="communicationPreference"
          value={formData.communicationPreference}
          onChange={(e) => updateFormData('communicationPreference', e.target.value)}
          placeholder="Describe your communication preferences..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="concerns">Are there any specific concerns or risks we should keep in mind?</label>
        <textarea
          id="concerns"
          value={formData.concerns}
          onChange={(e) => updateFormData('concerns', e.target.value)}
          placeholder="List any concerns or risks..."
        />
      </div>
    </div>
  );
}

export default ExpectationsSection;

import { FormData } from '../../types';

interface ResourcesSectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

function ResourcesSection({ formData, updateFormData }: ResourcesSectionProps) {
  return (
    <div className="form-section">
      <h2 className="section-title">Current Efforts and Resources</h2>
      <p className="section-subtitle">
        Purpose: To understand what has already been done and what assets exist.
      </p>

      <div className="form-group">
        <label htmlFor="previousResearch">Have you conducted any research, pilots or studies related to this challenge?</label>
        <textarea
          id="previousResearch"
          value={formData.previousResearch}
          onChange={(e) => updateFormData('previousResearch', e.target.value)}
          placeholder="Describe previous research or pilots..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="existingData">Are there existing data sources, reports or insights that we should review?</label>
        <textarea
          id="existingData"
          value={formData.existingData}
          onChange={(e) => updateFormData('existingData', e.target.value)}
          placeholder="List existing data sources..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="internalResources">What internal resources or teams could collaborate with us?</label>
        <textarea
          id="internalResources"
          value={formData.internalResources}
          onChange={(e) => updateFormData('internalResources', e.target.value)}
          placeholder="Describe available resources..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="constraints">Are there time or budget constraints that we should be aware of?</label>
        <textarea
          id="constraints"
          value={formData.constraints}
          onChange={(e) => updateFormData('constraints', e.target.value)}
          placeholder="Describe any constraints..."
        />
      </div>
    </div>
  );
}

export default ResourcesSection;

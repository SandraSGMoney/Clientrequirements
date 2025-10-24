import { FormData } from '../../types';

interface CompanySectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

function CompanySection({ formData, updateFormData }: CompanySectionProps) {
  return (
    <div className="form-section">
      <h2 className="section-title">Client discovery brief</h2>
      <p className="section-subtitle">
        Pre-session questionnaire<br />
        <em>(To be completed before our first workshop)</em>
      </p>

      <h3 className="section-heading">Company and Context</h3>
      <p className="section-purpose">Purpose: To understand who you are and where you operate.</p>

      <div className="form-group">
        <label htmlFor="companyName">Company name</label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName}
          onChange={(e) => updateFormData('companyName', e.target.value)}
          placeholder="Enter your company name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Your role / department</label>
        <input
          type="text"
          id="role"
          value={formData.role}
          onChange={(e) => updateFormData('role', e.target.value)}
          placeholder="e.g., Product Manager, Marketing"
        />
      </div>

      <div className="form-group">
        <label htmlFor="companyMission">Brief description of your company's mission or main value proposition</label>
        <textarea
          id="companyMission"
          value={formData.companyMission}
          onChange={(e) => updateFormData('companyMission', e.target.value)}
          placeholder="Describe your company's mission..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="mainProducts">Main products or services</label>
        <textarea
          id="mainProducts"
          value={formData.mainProducts}
          onChange={(e) => updateFormData('mainProducts', e.target.value)}
          placeholder="List your main products or services..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="customerSegments">Primary customer segments</label>
        <textarea
          id="customerSegments"
          value={formData.customerSegments}
          onChange={(e) => updateFormData('customerSegments', e.target.value)}
          placeholder="Describe your primary customer segments..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="competitors">Key competitors or alternatives</label>
        <textarea
          id="competitors"
          value={formData.competitors}
          onChange={(e) => updateFormData('competitors', e.target.value)}
          placeholder="List your key competitors..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="marketTrends">Major trends currently affecting your market or industry</label>
        <textarea
          id="marketTrends"
          value={formData.marketTrends}
          onChange={(e) => updateFormData('marketTrends', e.target.value)}
          placeholder="Describe major market trends..."
        />
      </div>
    </div>
  );
}

export default CompanySection;

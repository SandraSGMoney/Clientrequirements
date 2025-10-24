import { FormData } from '../../types';

interface UsersSectionProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

function UsersSection({ formData, updateFormData }: UsersSectionProps) {
  return (
    <div className="form-section">
      <h2 className="section-title">Users and Stakeholders</h2>
      <p className="section-subtitle">
        Purpose: To clarify who is involved and who benefits.
      </p>

      <div className="form-group">
        <label htmlFor="mainUsers">Who are the main users or beneficiaries of your product or service?</label>
        <textarea
          id="mainUsers"
          value={formData.mainUsers}
          onChange={(e) => updateFormData('mainUsers', e.target.value)}
          placeholder="Describe your main users..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="keyStakeholders">Who are the key stakeholders for this project (decision-makers, sponsors, collaborators)?</label>
        <textarea
          id="keyStakeholders"
          value={formData.keyStakeholders}
          onChange={(e) => updateFormData('keyStakeholders', e.target.value)}
          placeholder="List key stakeholders..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="internalTeams">Are there internal teams or departments that will participate in this work?</label>
        <textarea
          id="internalTeams"
          value={formData.internalTeams}
          onChange={(e) => updateFormData('internalTeams', e.target.value)}
          placeholder="List internal teams..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="additionalInvolvement">Is there anyone else we should involve in early discussions?</label>
        <textarea
          id="additionalInvolvement"
          value={formData.additionalInvolvement}
          onChange={(e) => updateFormData('additionalInvolvement', e.target.value)}
          placeholder="List additional people to involve..."
        />
      </div>
    </div>
  );
}

export default UsersSection;

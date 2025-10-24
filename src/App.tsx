import { useState } from 'react';
import { FormData, FormStep } from './types';
import { supabase } from './config/supabase';
import ProgressIndicator from './components/ProgressIndicator';
import CompanySection from './components/sections/CompanySection';
import GoalsSection from './components/sections/GoalsSection';
import OpportunitiesSection from './components/sections/OpportunitiesSection';
import UsersSection from './components/sections/UsersSection';
import ResourcesSection from './components/sections/ResourcesSection';
import ExpectationsSection from './components/sections/ExpectationsSection';
import './App.css';

const TOTAL_STEPS = 6;

function App() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    role: '',
    companyMission: '',
    mainProducts: '',
    customerSegments: '',
    competitors: '',
    marketTrends: '',
    topGoals: '',
    biggestChallenges: '',
    greatestImpact: '',
    actionsTaken: '',
    successDefinition: '',
    missedOpportunities: '',
    unmetNeeds: '',
    desiredBreakthrough: '',
    mainUsers: '',
    keyStakeholders: '',
    internalTeams: '',
    additionalInvolvement: '',
    previousResearch: '',
    existingData: '',
    internalResources: '',
    constraints: '',
    expectations: '',
    sessionSuccess: '',
    communicationPreference: '',
    concerns: '',
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((currentStep + 1) as FormStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as FormStep);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('client_discovery_briefs')
        .insert([
          {
            ...formData,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
      } else {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CompanySection formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <GoalsSection formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <OpportunitiesSection formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <UsersSection formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <ResourcesSection formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <ExpectationsSection formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  if (submitSuccess) {
    return (
      <div className="app">
        <div className="success-container">
          <div className="success-icon">✓</div>
          <h1>Thank you!</h1>
          <p>Your client discovery brief has been submitted successfully.</p>
          <p className="success-subtext">We'll review your responses and be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="form-container">
        <div className="form-header">
          <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button className="close-button" onClick={() => window.close()}>×</button>
        </div>

        <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <div className="form-content">
          {renderStep()}
        </div>

        <div className="form-actions">
          {currentStep > 1 && (
            <button 
              className="btn btn-secondary" 
              onClick={handleBack}
              disabled={isSubmitting}
            >
              Back
            </button>
          )}
          {currentStep < TOTAL_STEPS ? (
            <button 
              className="btn btn-primary" 
              onClick={handleNext}
            >
              Continue
            </button>
          ) : (
            <button 
              className="btn btn-primary" 
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

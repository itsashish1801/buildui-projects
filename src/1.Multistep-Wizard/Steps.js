import { useState } from 'react';
import Skeleton from './Skeleton';
import StepCircle from './StepCircle';

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='radial-gradient-bg h-screen flex items-center justify-center'>
      <div className='bg-slate-50 rounded-2xl px-14 py-10'>
        <div className='flex gap-x-36 relative'>
          <StepCircle step={1} currentStep={currentStep} />
          <StepCircle step={2} currentStep={currentStep} />
          <StepCircle step={3} currentStep={currentStep} />
          <StepCircle step={4} currentStep={currentStep} />
        </div>

        <div className='mt-16 animate-pulse'>
          <Skeleton h={14} w={80} />
          <div className='space-y-3 mt-8'>
            <Skeleton h={6} w='3/4' />
            <Skeleton h={6} w='4/5' />
            <Skeleton h={6} w='3/5' />
          </div>
        </div>

        <div className='flex justify-between mt-16'>
          <button
            disabled={currentStep === 1}
            className={`text-slate-700 ${
              currentStep === 1 ? 'opacity-20' : ''
            }`}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
          <button
            disabled={currentStep === 5}
            className={`bg-rose-500 text-white py-2 px-5 rounded-full text-lg ${
              currentStep === 5 ? 'opacity-20' : ''
            }`}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;

import { useState } from 'react';
import { motion } from 'framer-motion';

import StepCircle from './StepCircle';

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  let lineLength =
    currentStep === 1
      ? 'zero'
      : currentStep === 2
      ? 'one'
      : currentStep === 3
      ? 'two'
      : 'complete';

  return (
    <div className='radial-gradient-bg h-screen flex items-center justify-center'>
      <div className='bg-slate-50 relative rounded-2xl px-14 py-10'>
        <div className='flex gap-x-36 relative'>
          <div className='absolute w-full h-0.5 top-6 bg-slate-200' />
          <motion.div
            initial={{ scaleX: 0, transformOrigin: 'top left' }}
            animate={lineLength}
            variants={{
              one: {
                scaleX: 0.33,
              },
              two: {
                scaleX: 0.66,
              },
              complete: {
                scaleX: 1,
              },
            }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className='absolute w-full h-0.5 top-6 bg-rose-500'
          />

          <StepCircle step={1} currentStep={currentStep} />
          <StepCircle step={2} currentStep={currentStep} />
          <StepCircle step={3} currentStep={currentStep} />
          <StepCircle step={4} currentStep={currentStep} />
        </div>

        <div className='mt-16 animate-pulse'>
          <div className='rounded-lg bg-slate-200 h-12 w-80' />
          <div className='space-y-3 mt-8'>
            <div className='rounded-lg bg-slate-200 h-6 w-3/4' />
            <div className='rounded-lg bg-slate-200 h-6 w-4/5' />
            <div className='rounded-lg bg-slate-200 h-6 w-3/5' />
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

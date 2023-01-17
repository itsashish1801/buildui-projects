import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='bg-gradient-to-br from-slate-700 to-slate-900 h-screen flex items-center justify-center'>
      <div className='bg-white w-[720px] rounded-2xl px-14 py-10'>
        <div className='flex justify-between relative'>
          {/* <div className='absolute w-full h-0.5 rounded bg-slate-300 top-7'/> */}
          <Step stepCount={1} currentStep={currentStep} />
          <Step stepCount={2} currentStep={currentStep} />
          <Step stepCount={3} currentStep={currentStep} />
          <Step stepCount={4} currentStep={currentStep} />
        </div>
        <div className='mt-16 animate-pulse'>
          <div className='h-16 w-80 rounded-lg bg-slate-200' />
          <div className='space-y-3 mt-8'>
            <div className='h-6 w-3/4 bg-slate-200 rounded-lg' />
            <div className='h-6 w-4/5 bg-slate-200 rounded-lg' />
            <div className='h-6 w-3/5 bg-slate-200 rounded-lg' />
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
            disabled={currentStep === 4}
            className={`bg-rose-500 text-white py-2 px-5 rounded-full text-lg ${
              currentStep === 4 ? 'opacity-20' : ''
            }`}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function Step({ stepCount, currentStep }) {
  return (
    <div
      className={`h-14 w-14 rounded-full border-2 flex items-center justify-center z-20 bg-white text-slate-500 ${
        stepCount === currentStep
          ? 'border-rose-500 text-rose-500'
          : stepCount < currentStep
          ? 'bg-rose-500 border-rose-500 text-slate-50'
          : ''
      }`}
    >
      <span className='font-medium'>{stepCount}</span>
    </div>
  );
}

export default App;

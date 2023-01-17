const StepCircle = ({ step, currentStep }) => {
  let status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete';

  return (
    <div
      className={`h-12 w-12 rounded-full border-2 flex items-center justify-center z-20 font-semibold
      ${
        status === 'active'
          ? 'border-rose-500 text-rose-500'
          : status === 'complete'
          ? 'bg-rose-500 border-rose-500 text-slate-50'
          : 'border-slate-300 bg-slate-50 text-slate-400'
      }
    `}
    >
      {status === 'complete' ? <CheckIcon /> : <span>{step}</span>}
    </div>
  );
};

function CheckIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='20 6 9 17 4 12'></polyline>
    </svg>
  );
}

export default StepCircle;

import { motion } from 'framer-motion';

const StepCircle = ({ step, currentStep }) => {
  let status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete';

  return (
    <motion.div animate={status} className='relative'>
      <motion.div
        className='absolute inset-0 bg-rose-200 rounded-full'
        variants={{
          complete: {
            scale: 1.25,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          active: {
            scale: 1,
          },
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          type: 'tween',
          ease: 'circOut',
        }}
      />
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: 'var(--slate-50)',
            borderColor: 'var(--slate-200)',
            color: 'var(--slate-400)',
          },
          active: {
            backgroundColor: 'var(--slate-50)',
            borderColor: 'var(--rose-500)',
            color: 'var(--rose-500)',
          },
          complete: {
            backgroundColor: 'var(--rose-500)',
            borderColor: 'var(--rose-500)',
            color: 'var(--slate-50)',
          },
        }}
        transition={{ duration: 0.2 }}
        className={`relative h-12 w-12 rounded-full border-2 flex items-center justify-center z-20 font-semibold`}
      >
        {status === 'complete' ? <CheckIcon /> : <span>{step}</span>}
      </motion.div>
    </motion.div>
  );
};

function CheckIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='2.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: 'tween',
          ease: 'easeOut',
          duration: 0.4,
        }}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12.75l6 6 9-13.5'
      />
    </svg>
  );
}

export default StepCircle;

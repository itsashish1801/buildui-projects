import React from 'react';

const Skeleton = ({ w, h }) => {
  return <div className={`rounded-lg bg-slate-200 h-${h} w-${w}`}></div>;
};

export default Skeleton;

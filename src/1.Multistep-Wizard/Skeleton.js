import React from 'react';

const Skeleton = ({ w, h }) => {
  console.log(w, h);
  return <div className={`rounded-lg bg-slate-200 h-${h} w-${w}`} />;
};

export default Skeleton;

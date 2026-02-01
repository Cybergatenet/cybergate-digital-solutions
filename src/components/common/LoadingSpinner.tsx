import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-blue-600 dark:border-royal-blue-400"></div>
    </div>
  );
};

export default LoadingSpinner;
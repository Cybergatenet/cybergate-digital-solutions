// src/components/programs/ProgramCard.tsx
import React, { useState } from 'react';
import { TrainingProgram } from '../types';

interface ProgramCardProps {
  program: TrainingProgram;
  onViewDetails: (program: TrainingProgram) => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, onViewDetails }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-royal-blue-100 text-royal-blue-800 mb-2">
              {program.category.toUpperCase()}
            </span>
            <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
            <p className="text-sm text-gray-600 mt-1">Code: {program.code}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-royal-blue-600">{formatPrice(program.price)}</div>
            <div className="text-sm text-gray-500">{program.duration}</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{program.shortDescription}</p>
        
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-500">
            {program.sessions.length} session options
          </div>
          <button
            onClick={() => onViewDetails(program)}
            className="bg-royal-blue-600 text-white px-4 py-2 rounded-lg hover:bg-royal-blue-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
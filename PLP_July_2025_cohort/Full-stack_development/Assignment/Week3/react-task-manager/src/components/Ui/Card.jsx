import React from 'react';

const Card = ({ children, className = '', title }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-200 ${className}`}>
      {title && <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;

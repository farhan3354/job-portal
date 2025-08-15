import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '50,000+', label: 'Jobs Available' },
    { value: '8,000+', label: 'Companies Hiring' },
    { value: '1M+', label: 'Candidates Hired' },
    { value: '95%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { value: "94%", label: "Student Satisfaction" },
    { value: "10k+", label: "Active Learners" },
    { value: "150+", label: "Partner Schools" },
    { value: "2.5x", label: "Engagement Boost" }
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
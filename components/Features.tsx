import React from 'react';
import { Brain, Users, Globe, Zap, Shield, BarChart } from 'lucide-react';

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-14 h-14 rounded-2xl bg-brand-gray group-hover:bg-brand-red group-hover:text-white text-brand-red flex items-center justify-center mb-6 transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Active Recall",
      description: "Implemented scientific study techniques that boost retention rates through scheduled active recall sessions."
    },
    {
      icon: Users,
      title: "Collaborative Pods",
      description: "Small group dynamic workspaces that foster peer-to-peer learning and soft skill development."
    },
    {
      icon: Globe,
      title: "Global Classroom",
      description: "Connecting students with experts and peers worldwide through real-time virtual exchange programs."
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "AI-powered assessment tools that provide immediate, personalized feedback on assignments."
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Visual analytics dashboards for both students and teachers to monitor growth trajectories."
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Enterprise-grade security ensuring student data remains private, secure, and compliant."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-brand-red tracking-wider uppercase mb-2">Our Approach</h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-6">Innovation in Every Lesson</h3>
          <p className="text-lg text-gray-600">
            We combine pedagogical research with modern technology to create a holistic learning environment that prepares students for the challenges of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <FeatureCard key={index} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};
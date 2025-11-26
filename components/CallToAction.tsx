import React from 'react';
import { Button } from './Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-red rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-200">
          {/* Background abstract circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to transform your classroom?
            </h2>
            <p className="text-red-100 text-lg md:text-xl mb-10">
              Join over 500+ institutions that are already using D-IA-Crítica to drive better learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="white" size="lg">
                Download Whitepaper
              </Button>
              <Button className="bg-red-800 text-white hover:bg-red-900 border border-transparent" size="lg">
                Contact Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-red-200 opacity-80">
              No credit card required for demo scheduling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
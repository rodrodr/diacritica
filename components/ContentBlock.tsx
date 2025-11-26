import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ContentBlockProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  reversed?: boolean;
  bgGray?: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  id,
  title,
  subtitle,
  description,
  imageSrc,
  reversed = false,
  bgGray = false
}) => {
  return (
    <section id={id} className={`py-24 ${bgGray ? 'bg-brand-gray' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className={`absolute top-0 ${reversed ? 'left-0' : 'right-0'} w-full h-full transform ${reversed ? '-translate-x-4 translate-y-4' : 'translate-x-4 translate-y-4'} bg-brand-red rounded-3xl opacity-10`}></div>
              <img 
                src={imageSrc} 
                alt={title} 
                className="relative w-full rounded-3xl shadow-xl z-10 object-cover h-[400px] lg:h-[500px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="inline-block p-2 px-4 bg-white rounded-full border border-gray-200 text-brand-red font-semibold text-sm shadow-sm">
                {subtitle}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
              
              <ul className="space-y-4 pt-4">
                {[1, 2, 3].map((_, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      {i === 0 && "Enhanced engagement through interactive modules."}
                      {i === 1 && "Real-time adaptation to student performance data."}
                      {i === 2 && "Scalable architecture for institutions of any size."}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
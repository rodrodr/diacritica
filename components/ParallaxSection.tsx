import React from 'react';
import { Button } from './Button';

interface ParallaxSectionProps {
  text: string;
  imageSrc: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ text, imageSrc, buttonText, onButtonClick }) => {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter mb-8 shadow-sm">
          {text}
        </h2>
        {buttonText && (
          <Button variant="outline" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};
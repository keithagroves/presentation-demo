import React from 'react';

interface TitleSlideProps {
  slide: {
    title: string;
    subtitle: string;
  };
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent"></div>
      <div className="relative z-10">
        <div className="mb-8 animate-fade-in">
          <img 
            src={`${import.meta.env.BASE_URL}sourceco-logo.svg`}
            alt="SourceCo Logo" 
            className="w-48 h-auto mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-fade-in">
          {slide.title}
        </h1>
        <h2 className="text-4xl text-gray-700 font-light animate-fade-in-delay">
          {slide.subtitle}
        </h2>
        <div className="mt-16 flex justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse delay-75"></div>
          <div className="w-3 h-3 rounded-full bg-pink-600 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

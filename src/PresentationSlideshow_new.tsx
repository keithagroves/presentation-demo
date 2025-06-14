import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X, Database, Search, Workflow, FileText, Users, Lightbulb, Calendar, Target, Brain, Zap, Globe, Shield, Rocket, TrendingUp, Bot, Sparkles, Network, Layers, GitBranch, Activity, Clock, CheckCircle, Star, BarChart3, Award, Settings, Archive } from 'lucide-react';
import { TitleSlide } from './components/TitleSlide';
import { slidesData } from './data/slidesData';

const PresentationSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = slidesData;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        setShowMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const renderSlideContent = (slide) => {
    if (!slide) return null;

    switch (slide.type) {
      case 'title':
        return <TitleSlide title={slide.title} subtitle={slide.subtitle} />;

      case 'content':
        return (
          <div className="flex flex-col min-h-full p-16">
            <div className="flex items-center mb-12">
              {slide.icon && <div className="text-blue-600 mr-6">{slide.icon}</div>}
              <h2 className="text-5xl font-bold text-gray-800">{slide.title}</h2>
            </div>
            <div className="space-y-4 flex-1">
              {slide.bullets?.map((bullet, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 mr-6 flex-shrink-0"></div>
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed group-hover:text-gray-900 transition-colors">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'feature':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">{slide.title}</h2>
            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-blue-600 mb-8 flex justify-center">
                  {slide.icon}
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-6">{slide.workstream}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{slide.description}</p>
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-3 gap-6">
              {slide.components?.map((comp, idx) => (
                <div key={idx} className="group cursor-pointer relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-blue-600 mb-4">{comp.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{comp.name}</h3>
                    <p className="text-gray-600">{comp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'flow':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="space-y-4 flex-1">
              {slide.steps?.map((step, idx) => (
                <div key={idx} className="flex items-center group relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-xl mr-6">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                  {idx < slide.steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="space-y-8">
              {slide.items?.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-3xl p-8 border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-300 group-hover:shadow-xl">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="bg-red-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                            <Target className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-red-700">Challenge</h3>
                        </div>
                        <p className="text-gray-700 text-lg">{item.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                            <CheckCircle className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-green-700">Solution</h3>
                        </div>
                        <p className="text-gray-700 text-lg">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'enact-example':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-2xl text-gray-600 mb-12">{slide.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-600 mb-6">Benefits</h3>
                {slide.benefits?.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-900 rounded-2xl p-8 text-green-400 font-mono">
                <h3 className="text-white text-xl mb-4">Example Tool Definition</h3>
                <div className="space-y-2">
                  <div><span className="text-blue-400">name:</span> {slide.example?.name}</div>
                  <div><span className="text-blue-400">description:</span> {slide.example?.description}</div>
                  <div><span className="text-blue-400">authentication:</span> {slide.example?.authentication}</div>
                  <div><span className="text-blue-400">endpoints:</span> [{slide.example?.endpoints?.join(', ')}]</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tool-categories':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.categories?.map((category, idx) => (
                <div key={idx} className="group">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200 group-hover:border-purple-400 transition-all duration-300 group-hover:shadow-xl">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{category.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.tools?.map((tool, toolIdx) => (
                        <li key={toolIdx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-4 gap-6">
              {slide.phases?.map((phase, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${phase.color} rounded-3xl p-8 text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold mb-2">Months {phase.month}</div>
                      <div className="text-xl font-semibold opacity-90">{phase.title}</div>
                    </div>
                    <ul className="space-y-3">
                      {phase.items?.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'quick-wins':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-3 gap-8">
              {slide.wins?.map((win, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200 group-hover:border-blue-400 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4">
                      {win.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{win.title}</h3>
                    {win.desc && <p className="text-gray-600">{win.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-3 gap-8">
              {slide.modules?.map((module, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${module.color} rounded-3xl p-8 text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                      <div className="text-sm opacity-75">{module.level} • {module.duration}</div>
                    </div>
                    <p className="text-lg opacity-90">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'adoption':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="space-y-6">
              {slide.strategies?.map((strategy, idx) => (
                <div key={idx} className="group">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 group-hover:border-purple-400 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{strategy.title}</h3>
                        <p className="text-gray-600">{strategy.desc}</p>
                      </div>
                      <div className="text-3xl font-bold text-blue-600">{strategy.progress}%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${strategy.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.metrics?.map((metric, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200 group-hover:border-blue-400 transition-all duration-300 group-hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                        {metric.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">{metric.value}</h3>
                        <p className="text-lg font-semibold text-gray-600">{metric.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{metric.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center min-h-full">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{slide.title}</h2>
              <p className="text-xl text-gray-600">Content not available</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Menu Toggle */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed top-4 md:top-6 lg:top-8 right-4 md:right-6 lg:right-8 z-30 p-3 md:p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group"
      >
        {showMenu ? (
          <X className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
        ) : (
          <Menu className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200" />
        )}
      </button>

      {/* Slide Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-80 md:w-96 bg-white shadow-2xl overflow-y-auto">
            <div className="p-6 pt-20">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Slide Navigation</h3>
              <ul className="space-y-2">
                {slides.map((slide, index) => (
                  <li key={slide.id}>
                    <button
                      onClick={() => goToSlide(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                        index === currentSlide 
                          ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600' 
                          : 'text-gray-600 hover:translate-x-1'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{slide.title}</span>
                        <span className="text-sm opacity-60">{index + 1}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen p-4 md:p-6 lg:p-8">
        <div className={`max-w-7xl w-full min-h-[80vh] bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-y-auto transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {renderSlideContent(slides[currentSlide])}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="fixed left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-x-1 transition-transform duration-200" />
      </button>

      <button
        onClick={nextSlide}
        className="fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentSlide === slides.length - 1}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-200" />
      </button>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <div className="h-1.5 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PresentationSlideshow;

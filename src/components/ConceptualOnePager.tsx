import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  Users, 
  Target,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  Clock,
  Zap,
  Building2,
  DollarSign,
  Globe,
  Bot,
  MessageSquare,
  Sparkles,
  Database,
  Shield,
  Rocket,
  Heart,
  Star,
  Award,
  Brain,
  Search,
  FileText,
  Activity,
  BarChart3,
  TrendingDown,
  AlertTriangle,
  User,
  ArrowDown,
  ArrowUp,
  MapPin,
  Briefcase,
  Eye,
  BookOpen,
  Layers
} from 'lucide-react';

interface ConceptualOnePagerProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

const ConceptualOnePager: React.FC<ConceptualOnePagerProps> = ({ onNext, onPrevious }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const peUseCases = [
    {
      icon: Search,
      title: 'Deal Sourcing & Screening',
      description: 'Autonomous research on potential targets, market analysis, and competitive landscapes',
      time: '8 hrs → 90 mins'
    },
    {
      icon: FileText,
      title: 'Investment Committee Prep',
      description: 'Comprehensive due diligence packages with financial analysis and risk assessment',
      time: '12 hrs → 2 hrs'
    },
    {
      icon: Eye,
      title: 'Competitive Intelligence',
      description: 'Real-time market monitoring and competitor analysis across portfolio',
      time: '6 hrs → 45 mins'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Company Support',
      description: 'Market research and growth opportunity identification for existing investments',
      time: '10 hrs → 2 hrs'
    }
  ];

  const researchSteps = [
    {
      step: 1,
      title: 'Autonomous Planning',
      description: 'AI creates research plan based on PE frameworks and deal stage',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Multi-Source Analysis',
      description: 'Simultaneously analyzes financials, market data, news, and competitive intel',
      icon: Layers,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'IC-Ready Synthesis',
      description: 'Delivers structured analysis in PE-standard formats with source citations',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-pink-400/10 rounded-full animate-pulse delay-150"></div>
      </div>

      {/* Navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link 
          to="/?slide=training-materials" 
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Training</span>
        </Link>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center mb-6">
            <img 
              src="https://raw.githubusercontent.com/keithagroves/presentation-demo/refs/heads/main/public/sourceco-logo.svg"
              alt="SourceCo Logo" 
              className="w-20 h-auto opacity-90"
            />
          </div>
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Your Personal Research Analyst
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-4xl mx-auto mb-6">
            AI-powered autonomous research agent that thinks like a senior PE analyst with 10+ years experience
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
              🎯 PE-Specific • 🤖 Autonomous • ⚡ 90% Time Savings
            </div>
          </div>
        </div>

        {/* Problem vs Solution Comparison */}
        <div className={`mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            The "Aha" Moment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional Research */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <TrendingDown className="text-white" size={16} />
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                  <User className="mr-3" size={24} />
                  Traditional PE Research
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">TechFlow Solutions Analysis</span>
                      <span className="text-red-600 font-bold">8+ Hours</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• Manual financial statement analysis</div>
                      <div>• Scattered market research</div>
                      <div>• Limited competitive intelligence</div>
                      <div>• Junior analyst capacity constraints</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-red-700">
                    <AlertTriangle size={20} />
                    <span className="font-medium">Risk: Missing critical insights, delayed decisions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Research Agent */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <TrendingUp className="text-white" size={16} />
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                  <Bot className="mr-3" size={24} />
                  Your Research Agent
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">TechFlow Solutions Analysis</span>
                      <span className="text-green-600 font-bold">90 Minutes</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• Autonomous multi-source data analysis</div>
                      <div>• Comprehensive market positioning</div>
                      <div>• Real-time competitive landscape</div>
                      <div>• IC-ready investment memo</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-green-700">
                    <Sparkles size={20} />
                    <span className="font-medium">Result: Deeper insights, faster decisions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - 3 Step Process */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            How Your Research Agent Works
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {researchSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                    
                    {index < researchSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 -right-4 transform">
                        <ArrowRight className="text-gray-400" size={24} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PE-Specific Use Cases */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Built for PE Workflows
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {peUseCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-800">{useCase.title}</h3>
                          <span className="text-green-600 font-bold text-sm bg-green-100 px-2 py-1 rounded">
                            {useCase.time}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PE-Specific Value Props */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why PE Teams Love It
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Thinks like a senior analyst with 10+ years experience"
              </h3>
              <p className="text-gray-600 text-sm">
                Understands PE frameworks, deal stages, and investment thesis development
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Adapts research approach based on deal stage"
              </h3>
              <p className="text-gray-600 text-sm">
                Automatically adjusts depth and focus from initial screening to final due diligence
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                "Delivers IC-ready materials automatically"
              </h3>
              <p className="text-gray-600 text-sm">
                Structured analysis in PE-standard formats with full source attribution
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to 10x Your Research Speed?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join leading PE firms using autonomous research agents for faster, deeper deal insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
                  <Bot size={20} />
                  <span>See Research Agent Demo</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors duration-200 flex items-center space-x-2">
                  <MessageSquare size={20} />
                  <span>Schedule Partner Discussion</span>
                </button>
              </div>
              
              <div className="mt-8 flex justify-center items-center space-x-8 text-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10x</div>
                  <div className="text-sm">Faster Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">IC-Ready</div>
                  <div className="text-sm">Materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        {(onPrevious || onNext) && (
          <div className="fixed bottom-6 right-6 flex space-x-3">
            {onPrevious && (
              <button 
                onClick={onPrevious}
                className="bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            {onNext && (
              <button 
                onClick={onNext}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConceptualOnePager;

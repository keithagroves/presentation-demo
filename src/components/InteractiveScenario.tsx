import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle2, 
  Clock, 
  Users, 
  Target,
  Brain,
  Search,
  TrendingUp,
  FileText,
  GitBranch,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  User,
  Building2,
  DollarSign,
  MapPin,
  TrendingDown,
  Zap,
  Activity,
  Database,
  Globe,
  Bot,
  MessageSquare,
  Sparkles
} from 'lucide-react';

// Typing animation hook
const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    
    const timer = setTimeout(() => {
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(typeTimer);
        }
      }, speed);

      return () => clearInterval(typeTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// Typed text component
const TypedText: React.FC<{ 
  text: string; 
  speed?: number; 
  delay?: number;
  className?: string;
  onComplete?: () => void;
}> = ({ text, speed = 30, delay = 0, className = '', onComplete }) => {
  const { displayText, isComplete } = useTypewriter(text, speed, delay);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

const InteractiveScenario = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [showNextStep, setShowNextStep] = useState(false);

  const steps = [
    {
      id: 'intro',
      title: 'Welcome to AI-Powered Deal Research',
      type: 'intro',
      content: {
        scenario: {
          role: 'Senior Associate at SourceCo Partners',
          company: 'TechFlow Solutions',
          industry: 'B2B SaaS for logistics/supply chain',
          revenue: '~$15M ARR',
          location: 'Austin, Texas',
          stage: 'Series B',
          timeline: '2 hours vs usual 8+ hours'
        },
        objectives: [
          'Master autonomous research agent workflow',
          'Guide AI through complex multi-step analysis', 
          'Validate and refine AI-generated insights',
          'Synthesize findings for executive presentation'
        ]
      }
    },
    {
      id: 'step1',
      title: 'Step 1: Initiate Research Agent',
      type: 'action',
      userQuery: `Analyze TechFlow Solutions as a potential PE acquisition target. Focus on market position, competitive differentiation, and financial health. This is for an investment committee presentation tomorrow.`,
      aiResponse: `🤔 *Analyzing investment thesis frameworks...*

Based on PE acquisition criteria, I'm considering multiple investment lenses:

*Selecting comprehensive approach...*

I'll analyze TechFlow Solutions through a multi-dimensional PE lens:

📊 **Market Opportunity**
- Total Addressable Market (TAM) sizing for logistics SaaS
- Competitive positioning analysis
- Customer concentration and retention metrics

🏢 **Operational Excellence** 
- Revenue quality and predictability
- Technology differentiation and IP protection
- Management team track record and scalability

💼 **Investment Case**
- Strategic value creation opportunities
- Risk factor identification and mitigation
- Exit strategy potential and valuation multiples

*Initiating market analysis with focus on logistics SaaS fundamentals...*

Would you like me to prioritize growth metrics, competitive moats, or financial quality first?`,
      choices: [
        {
          id: 'growth-metrics',
          text: 'Prioritize growth metrics and market expansion potential',
          type: 'growth'
        },
        {
          id: 'competitive-moats', 
          text: 'Focus on competitive advantages and defensibility',
          type: 'moat'
        },
        {
          id: 'financial-quality',
          text: 'Start with financial quality and revenue predictability',
          type: 'financial',
          recommended: true
        }
      ],
      learningPoint: 'Effective AI research requires strategic questioning - let data guide assumptions rather than making them upfront.'
    },
    {
      id: 'step2', 
      title: 'Step 2: Real-Time Research Monitoring',
      type: 'monitoring',
      aiWorking: [
        '🔍 Searching: "TechFlow Solutions logistics SaaS customers"',
        '📊 Found: 47 relevant data points across 12 sources',
        '🎯 Key Finding: Primary focus on mid-market retailers (50-500 locations)', 
        '🔍 Pivoting to: "Retail logistics SaaS market size 2024"',
        '📈 Analyzing: Gartner, IDC, and Forrester reports',
        '✅ Market Analysis Complete'
      ],
      conflict: {
        issue: 'Found conflicting market size data ranging from $2.1B to $8.4B',
        question: 'Should I prioritize more recent data, focus on specific methodology, or investigate the discrepancy?',
        choices: [
          { id: 'recent', text: 'Use most recent data and note limitations' },
          { id: 'methodology', text: 'Focus on methodology consistency' },
          { id: 'investigate', text: 'Investigate discrepancy thoroughly', recommended: true }
        ]
      }
    },
    {
      id: 'step3',
      title: 'Step 3: Competitive Intelligence',
      type: 'analysis', 
      findings: {
        competitors: 8,
        marketPosition: '#4 in market share',
        differentiation: 'Real-time inventory visibility across multiple systems',
        challenge: 'Limited recent competitive positioning data'
      },
      aiQuestion: `I found limited recent information about TechFlow's competitive positioning. Should I:
A) Use available data and note limitations
B) Expand search to industry reports and analyst coverage  
C) Cross-reference customer reviews and case studies for insights?`,
      choices: [
        { id: 'limited', text: 'Use available data and note limitations' },
        { id: 'expand', text: 'Expand search to industry reports and analyst coverage', recommended: true },
        { id: 'cross-reference', text: 'Cross-reference customer reviews and case studies for insights' }
      ],
      learningPoint: 'Learning when to push for more data vs. working with limitations is crucial for effective AI research.'
    },
    {
      id: 'step4',
      title: 'Step 4: Financial Health Assessment', 
      type: 'analysis',
      challenge: 'TechFlow is private - limited public financial data available',
      aiStrategy: `Public financial data unavailable. Initiating alternative analysis:
• Funding round analysis and investor quality
• Employee growth patterns (LinkedIn data)  
• Technology investment indicators (job postings, tech stack)
• Customer growth signals (case studies, press releases)`,
      insights: [
        'Series B funding from top-tier VCs suggests strong fundamentals',
        '40% employee growth in last 12 months indicates scaling',
        'Heavy investment in AI/ML engineering roles',
        'Customer case studies show 25-40% efficiency gains'
      ]
    },
    {
      id: 'results',
      title: 'Step 5: Synthesis & Executive Summary',
      type: 'results',
      findings: {
        market: '$4.2B addressable market, 15% CAGR',
        position: 'Mid-tier player with differentiated technology',
        financials: 'Healthy based on growth indicators',
        risk: 'High customer concentration (top 5 = 60% revenue)'
      },
      timeComparison: {
        traditional: '6-8 hours',
        aiPowered: '90 minutes',
        improvement: '75% time reduction'
      }
    }
  ];

  const currentStepData = steps[currentStep];

  // Auto-proceed for analysis steps without questions
  useEffect(() => {
    if (currentStepData?.type === 'analysis' && !currentStepData.aiQuestion && !showAIResponse) {
      const timer = setTimeout(() => {
        setShowAIResponse(true);
        setTimeout(() => {
          setCompletedSteps(prev => new Set([...prev, currentStep]));
          setShowNextStep(true);
        }, 3000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, showAIResponse, currentStepData]);

  const handleChoice = (choiceId: string) => {
    setSelectedChoice(choiceId);
    setShowAIResponse(true);
    
    // Mark step as completed after choice
    setTimeout(() => {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setShowNextStep(true);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowAIResponse(false);
      setSelectedChoice(null);
      setShowNextStep(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStepData.type) {
      case 'intro':
        return (
          <div className="space-y-8">
            {/* Scenario Setup */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 rounded-full p-3 mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Your Mission</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Role:</span>
                    <TypedText 
                      text={currentStepData.content.scenario.role}
                      speed={40}
                      className="text-blue-800"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Target:</span>
                    <TypedText 
                      text={currentStepData.content.scenario.company}
                      speed={40}
                      delay={1000}
                      className="text-blue-800"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Industry:</span>
                    <TypedText 
                      text={currentStepData.content.scenario.industry}
                      speed={40}
                      delay={2000}
                      className="text-blue-800"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Revenue:</span>
                    <TypedText 
                      text={currentStepData.content.scenario.revenue}
                      speed={40}
                      delay={3000}
                      className="text-green-700 font-bold"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="font-semibold">Location:</span>
                    <TypedText 
                      text={currentStepData.content.scenario.location}
                      speed={40}
                      delay={4000}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold">Timeline:</span>
                    <TypedText 
                      text={currentStepData.content.scenario.timeline}
                      speed={40}
                      delay={5000}
                      className="text-purple-700 font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Objectives */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Learning Objectives</h3>
              </div>
              
              <div className="space-y-4">
                {currentStepData.content.objectives.map((objective, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <TypedText 
                      text={objective}
                      speed={30}
                      delay={6000 + (idx * 1500)}
                      className="text-green-800 text-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center pt-4">
              <button
                onClick={nextStep}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Begin Research Training
              </button>
            </div>
          </div>
        );

      case 'action':
        return (
          <div className="space-y-8">
            {/* User Query */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Your Query to AI Agent</h4>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <TypedText 
                  text={currentStepData.userQuery}
                  speed={25}
                  className="text-gray-700 text-lg"
                  onComplete={() => setTimeout(() => setShowAIResponse(true), 1000)}
                />
              </div>
            </div>

            {/* AI Response */}
            {showAIResponse && (
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 animate-fadeIn">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-2 mr-3">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-purple-800">AI Research Agent Response</h4>
                  <div className="ml-2 flex space-x-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <TypedText 
                    text={currentStepData.aiResponse}
                    speed={20}
                    delay={500}
                    className="text-gray-700 whitespace-pre-line"
                    onComplete={() => setTimeout(() => setShowNextStep(true), 1000)}
                  />
                </div>
              </div>
            )}

            {/* Choices */}
            {showNextStep && (
              <div className="space-y-4 animate-slideUp">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">How should the AI proceed?</h4>
                {currentStepData.choices.map((choice, idx) => (
                  <button
                    key={choice.id}
                    onClick={() => handleChoice(choice.id)}
                    disabled={selectedChoice !== null}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedChoice === choice.id
                        ? choice.recommended 
                          ? 'border-green-500 bg-green-50 text-green-800' 
                          : 'border-blue-500 bg-blue-50 text-blue-800'
                        : selectedChoice
                        ? 'border-gray-200 bg-gray-50 text-gray-500'
                        : choice.recommended
                        ? 'border-green-200 bg-green-50 hover:border-green-400 hover:bg-green-100 text-green-800'
                        : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 text-gray-700'
                    } ${selectedChoice ? 'cursor-default' : 'cursor-pointer hover:shadow-lg'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        Option {String.fromCharCode(65 + idx)}: {choice.text}
                      </span>
                      {choice.recommended && (
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                          Recommended
                        </span>
                      )}
                      {selectedChoice === choice.id && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  </button>
                ))}
                
                {selectedChoice && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 animate-fadeIn">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h5 className="font-semibold text-blue-800 mb-2">Learning Point</h5>
                        <TypedText 
                          text={currentStepData.learningPoint}
                          speed={25}
                          className="text-blue-700"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'monitoring':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900">AI Agent Working...</h3>
              </div>
              
              <div className="space-y-3">
                {currentStepData.aiWorking.map((step, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <TypedText 
                      text={step}
                      speed={30}
                      delay={idx * 2000}
                      className="text-green-800 font-mono"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Conflict Resolution */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 mr-3" />
                <h4 className="text-lg font-semibold text-amber-800">AI Needs Guidance</h4>
              </div>
              
              <div className="mb-4">
                <TypedText 
                  text={currentStepData.conflict.issue}
                  speed={25}
                  delay={12000}
                  className="text-amber-800 text-lg"
                />
              </div>
              
              <div className="mb-4">
                <TypedText 
                  text={currentStepData.conflict.question}
                  speed={25}
                  delay={15000}
                  className="text-amber-700"
                  onComplete={() => setTimeout(() => setShowNextStep(true), 1000)}
                />
              </div>

              {showNextStep && (
                <div className="space-y-3 animate-slideUp">
                  {currentStepData.conflict.choices.map((choice, idx) => (
                    <button
                      key={choice.id}
                      onClick={() => handleChoice(choice.id)}
                      disabled={selectedChoice !== null}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                        selectedChoice === choice.id
                          ? 'border-amber-500 bg-amber-100 text-amber-800'
                          : selectedChoice
                          ? 'border-gray-200 bg-gray-50 text-gray-500'
                          : choice.recommended
                          ? 'border-amber-300 bg-amber-50 hover:border-amber-400 hover:bg-amber-100'
                          : 'border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{choice.text}</span>
                        {choice.recommended && (
                          <span className="text-xs bg-amber-600 text-white px-2 py-1 rounded-full">
                            Best Practice
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'analysis':
        return (
          <div className="space-y-8">
            {currentStepData.findings && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Key Findings</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-blue-800">Competitors Found:</span>
                      <TypedText 
                        text={` ${currentStepData.findings.competitors} direct competitors`}
                        speed={40}
                        className="text-blue-700 ml-2 font-bold"
                      />
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800">Market Position:</span>
                      <TypedText 
                        text={` ${currentStepData.findings.marketPosition}`}
                        speed={40}
                        delay={1000}
                        className="text-blue-700 ml-2"
                      />
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Key Differentiator:</span>
                    <TypedText 
                      text={` ${currentStepData.findings.differentiation}`}
                      speed={30}
                      delay={2000}
                      className="text-blue-700 ml-2 italic"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStepData.challenge && (
              <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="text-lg font-semibold text-red-800">Challenge Identified</h4>
                </div>
                <TypedText 
                  text={currentStepData.challenge}
                  speed={25}
                  delay={3000}
                  className="text-red-700"
                />
              </div>
            )}

            {currentStepData.aiStrategy && (
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 rounded-full p-2 mr-3">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-purple-800">AI Strategy</h4>
                </div>
                <TypedText 
                  text={currentStepData.aiStrategy}
                  speed={20}
                  delay={4000}
                  className="text-purple-700 whitespace-pre-line"
                  onComplete={() => setTimeout(() => setShowNextStep(true), 1000)}
                />
              </div>
            )}

            {showNextStep && currentStepData.insights && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200 animate-slideUp">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-green-600 mr-3" />
                  <h4 className="text-lg font-semibold text-green-800">Generated Insights</h4>
                </div>
                <div className="space-y-3">
                  {currentStepData.insights.map((insight, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                      <TypedText 
                        text={insight}
                        speed={25}
                        delay={idx * 1500}
                        className="text-green-700"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Continue button for analysis steps without questions */}
                {!currentStepData.aiQuestion && (
                  <div className="mt-6">
                    <button
                      onClick={nextStep}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      Continue to Next Step
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {currentStepData.aiQuestion && (
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 border border-amber-200">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-6 h-6 text-amber-600 mr-3" />
                  <h4 className="text-lg font-semibold text-amber-800">AI Guidance Request</h4>
                </div>
                <TypedText 
                  text={currentStepData.aiQuestion}
                  speed={25}
                  delay={6000}
                  className="text-amber-700 whitespace-pre-line"
                />
                
                {currentStepData.learningPoint && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-amber-200">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <h5 className="font-semibold text-amber-800 mb-2">Learning Point</h5>
                        <TypedText 
                          text={currentStepData.learningPoint}
                          speed={25}
                          delay={8000}
                          className="text-amber-700"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Choice buttons for analysis steps with questions */}
            {currentStepData.choices && currentStepData.aiQuestion && !selectedChoice && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Choose your approach:</h4>
                <div className="space-y-3">
                  {currentStepData.choices.map((choice, idx) => (
                    <button
                      key={choice.id}
                      onClick={() => handleChoice(choice.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 group ${
                        choice.recommended 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 group-hover:text-blue-800">{choice.text}</span>
                        {choice.recommended && (
                          <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* AI Response for analysis choices */}
            {selectedChoice && showAIResponse && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200 animate-slideUp">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 rounded-full p-2 mr-3">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-green-800">AI Response</h4>
                </div>
                <TypedText 
                  text="Excellent choice! Expanding search to industry reports and analyst coverage provides more comprehensive competitive intelligence. This approach balances thoroughness with practical research timelines."
                  speed={25}
                  className="text-green-700"
                />
                
                {showNextStep && (
                  <div className="mt-6">
                    <button
                      onClick={nextStep}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      Continue to Next Step
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8">
            {/* Executive Summary */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 border border-indigo-200">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 rounded-full p-3 mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900">Executive Summary Generated</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(currentStepData.findings).map(([key, value], idx) => (
                  <div key={key} className="bg-white rounded-lg p-4 border border-indigo-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      <span className="font-semibold text-indigo-800 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    </div>
                    <TypedText 
                      text={String(value)}
                      speed={30}
                      delay={idx * 1500}
                      className="text-indigo-700 mt-2 ml-6"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Time Comparison */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 rounded-full p-3 mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Time Efficiency Achieved</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    <TypedText text={currentStepData.timeComparison.traditional} speed={50} />
                  </div>
                  <div className="text-gray-600">Traditional Research</div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    <TypedText text={currentStepData.timeComparison.aiPowered} speed={50} delay={1000} />
                  </div>
                  <div className="text-gray-600">AI-Powered Research</div>
                </div>
                
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white">
                  <div className="text-3xl font-bold mb-2">
                    <TypedText text={currentStepData.timeComparison.improvement} speed={50} delay={2000} />
                  </div>
                  <div className="text-green-100">Time Saved</div>
                </div>
              </div>
            </div>

            {/* Completion */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg">
                <CheckCircle2 className="w-6 h-6 mr-3" />
                <span className="text-lg font-semibold">Training Scenario Complete!</span>
              </div>
              
              {/* Read Full Report Button */}
              <div>
                <button
                  onClick={() => {
                    // This could open a modal, navigate to a detailed report, or download a PDF
                    alert('Full report functionality would be implemented here. This could open a detailed report page, download a PDF, or show a modal with comprehensive analysis.');
                  }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group text-lg font-semibold"
                >
                  <FileText className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Read Full Report
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/?slide=training-materials"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Training</span>
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Interactive Training Scenario</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Step {currentStep + 1} of {steps.length}
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Step Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6 text-white">
            <h2 className="text-3xl font-bold mb-2">{currentStepData.title}</h2>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">45-60 minutes total</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">Individual or group</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span className="text-sm">Hands-on learning</span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="p-8">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          {currentStep > 0 && (
            <div className="border-t border-gray-200 px-8 py-6 bg-gray-50">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setCurrentStep(currentStep - 1);
                    setShowAIResponse(false);
                    setSelectedChoice(null);
                    setShowNextStep(false);
                  }}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>

                {(currentStep < steps.length - 1 && (completedSteps.has(currentStep) || currentStepData.type === 'intro')) && (
                  <button
                    onClick={nextStep}
                    className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
                  >
                    <span>Continue to Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default InteractiveScenario;

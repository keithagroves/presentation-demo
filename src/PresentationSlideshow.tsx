import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X, Database, Search, Workflow, FileText, Users, Lightbulb, Calendar, Target, Brain, Zap, Globe, Shield, Rocket, TrendingUp, Bot, Sparkles, Network, Layers, GitBranch, Activity, Clock, CheckCircle, Star, BarChart3, Award, Settings, Archive, Play, ArrowRight, DollarSign } from 'lucide-react';
import { TitleSlide } from './components/TitleSlide';
import { slidesData } from './data/slidesData';

const PresentationSlideshow = () => {
  const [searchParams] = useSearchParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 'title',
      title: 'Strategic AI Assessment',
      subtitle: 'From Fragmentation to Intelligence',
      type: 'title'
    },
    {
      id: 'overview',
      title: 'The Vision',
      type: 'content',
      icon: <Rocket className="w-8 h-8" />,
      bullets: [
        'Current State: Fragmented data sources across teams',
        'Future Vision: Unified AI research assistant for deal professionals',
        'Goal: Transform private equity research from manual to autonomous',
        'Innovation: AI-first platform with extensible tool ecosystem'
      ]
    },
    {
      id: 'workstream-choice',
      title: 'Chosen Workstream',
      type: 'feature',
      workstream: 'Intelligent Research Assistant',
      description: 'Building an AI system that conducts autonomous research across all data sources, delivering comprehensive analysis with full citations',
      icon: <Search className="w-16 h-16" />
    },
    {
      id: 'architecture',
      title: 'System Architecture',
      type: 'architecture',
      components: [
        { name: 'Simple Data Connectors', desc: 'Direct API integrations with existing systems (CRM, email, documents)', icon: <Database className="w-8 h-8" /> },
        { name: 'Unified Search Layer', desc: 'PostgreSQL with pgvector for semantic and keyword search', icon: <Layers className="w-8 h-8" /> },
        { name: 'AI Research Engine', desc: 'GPT-4/Claude with PE-specific few-shot prompting and reasoning', icon: <Brain className="w-8 h-8" /> },
        { name: 'Context Management', desc: 'Session-aware query enhancement and conversation memory', icon: <Zap className="w-8 h-8" /> },
        { name: 'Security Layer', desc: 'Source-system authentication with permission inheritance', icon: <Shield className="w-8 h-8" /> },
        { name: 'Enact Tool Registry', desc: 'Extensible tool ecosystem with versioning and security', icon: <GitBranch className="w-8 h-8" /> }
      ]
    },
    {
      id: 'data-flow',
      title: 'Data Flow Architecture',
      type: 'flow',
      steps: [
        'Direct connectors pull data from existing systems (Salesforce, Gmail, SharePoint, databases)',
        'PostgreSQL stores normalized data with vector embeddings for semantic search',
        'AI agents analyze user queries using few-shot PE prompting and plan multi-step research workflows',
        'Security policies ensure users only see data they have permission to access',
        'Results delivered with full source attribution and confidence scoring'
      ]
    },
    {
      id: 'ai-implementation',
      title: 'AI Implementation Strategy',
      type: 'ai-features',
      features: [
        { title: 'Semantic Search', desc: 'Vector embeddings for conceptual understanding', icon: <Network className="w-6 h-6" /> },
        { title: 'Few-Shot PE Intelligence', desc: 'PE-specific prompting that learns from minimal examples', icon: <Brain className="w-6 h-6" /> },
        { title: 'Intelligent Ranking', desc: 'Context-aware relevance scoring', icon: <TrendingUp className="w-6 h-6" /> },
        { title: 'Research Agents', desc: 'Multi-step autonomous analysis workflows', icon: <Bot className="w-6 h-6" /> },
        { title: 'Citation Engine', desc: 'Full source tracking and audit trails', icon: <FileText className="w-6 h-6" /> },
        { title: 'Conversation Memory', desc: 'Session context for follow-up queries', icon: <Zap className="w-6 h-6" /> }
      ]
    },
    {
      id: 'few-shot-details',
      title: 'Few-Shot PE Intelligence',
      type: 'few-shot-strategy',
      subtitle: 'Cost-Effective AI Training for Immediate PE Domain Knowledge',
      benefits: [
        {
          title: 'Zero Training Costs',
          desc: '90% cheaper than fine-tuning - works with existing GPT-4/Claude models',
          icon: <DollarSign className="w-6 h-6" />,
          metric: '90% cost reduction'
        },
        {
          title: 'Immediate Intelligence',
          desc: 'PE terminology understanding from day one with 5-10 example prompts',
          icon: <Zap className="w-6 h-6" />,
          metric: 'Day 1 deployment'
        },
        {
          title: 'Adaptive Learning',
          desc: 'Prompts improve automatically from user corrections and feedback',
          icon: <Brain className="w-6 h-6" />,
          metric: 'Self-improving'
        },
        {
          title: 'PE Domain Awareness',
          desc: 'Understands ARR, EBITDA multiples, deal structures, LP relationships',
          icon: <Target className="w-6 h-6" />,
          metric: 'Domain-native'
        }
      ],
      example: {
        title: 'Example: Learning PE Context',
        input: 'User asks: "Find SaaS companies with strong ARR growth"',
        processing: 'AI learns: ARR = Annual Recurring Revenue (key SaaS metric for PE)',
        nextQuery: 'Next query: "ARR multiples for Series B SaaS"',
        result: 'AI automatically searches for valuation data and understands context'
      }
    },
    {
      id: 'deep-research-ai',
      title: 'Autonomous Research Agents',
      type: 'deep-research',
      subtitle: 'AI That Researches Like Expert Analysts',
      capabilities: [
        {
          title: 'Research Planning',
          desc: 'Breaks complex questions into structured research tasks automatically',
          icon: <Brain className="w-6 h-6" />,
          example: 'Given "Analyze fintech market opportunities", creates plan: market size → competitive landscape → deal flow → investment thesis'
        },
        {
          title: 'Multi-Source Analysis',
          desc: 'Intelligently searches across internal and external data sources',
          icon: <Network className="w-6 h-6" />,
          example: 'Combines CRM relationship data with market reports, news analysis, and competitive intelligence'
        },
        {
          title: 'Adaptive Learning',
          desc: 'Refines search strategy based on findings and iterates until complete',
          icon: <GitBranch className="w-6 h-6" />,
          example: 'If initial market data is insufficient, expands search to adjacent markets and alternative sources'
        },
        {
          title: 'Comprehensive Reports',
          desc: 'Delivers analysis with full citations and confidence scoring',
          icon: <FileText className="w-6 h-6" />,
          example: 'Investment memo with every data point sourced and confidence levels for regulatory compliance'
        }
      ]
    },
    {
      id: 'research-workflow',
      title: 'Research Workflow Example',
      type: 'research-flow',
      subtitle: 'How AI Transforms Deal Analysis',
      workflow: [
        {
          step: 'Query Understanding',
          desc: 'AI interprets "Analyze fintech acquisition targets" and creates research plan',
          details: ['Market landscape analysis', 'Target identification', 'Financial assessment', 'Strategic fit evaluation'],
          icon: <Brain className="w-8 h-8" />
        },
        {
          step: 'Information Gathering',
          desc: 'Searches internal CRM, external databases, news sources, and market reports',
          details: ['CRM relationship mapping', 'Financial database queries', 'News sentiment analysis', 'Industry report synthesis'],
          icon: <Search className="w-8 h-8" />
        },
        {
          step: 'Analysis & Synthesis',
          desc: 'Identifies patterns, evaluates opportunities, and assesses strategic fit',
          details: ['Competitive positioning', 'Financial performance trends', 'Market opportunity sizing', 'Risk assessment'],
          icon: <GitBranch className="w-8 h-8" />
        },
        {
          step: 'Report Generation',
          desc: 'Delivers comprehensive memo with executive summary and detailed findings',
          details: ['Executive summary', 'Investment thesis', 'Risk factors', 'Source citations with confidence scores'],
          icon: <FileText className="w-8 h-8" />
        }
      ]
    },
    {
      id: 'challenges',
      title: 'Top 3 Challenges & Solutions',
      type: 'challenges',
      items: [
        { challenge: 'Manual research takes weeks', solution: 'Autonomous AI agents complete comprehensive analysis in hours', icon: <Brain className="w-8 h-8" /> },
        { challenge: 'Information scattered across systems', solution: 'Unified search with intelligent source prioritization', icon: <Shield className="w-8 h-8" /> },
        { challenge: 'Lack of audit trails', solution: 'Complete citation tracking and confidence scoring for compliance', icon: <Target className="w-8 h-8" /> }
      ]
    },
    {
      id: 'enact-integration',
      title: 'Extensibility Through Enact Protocol',
      type: 'enact',
      subtitle: 'Transform Any Tool into an AI Capability',
      benefits: [
        { title: 'Rapid Integration', desc: 'Add new data sources and capabilities in hours', icon: <Zap className="w-6 h-6" /> },
        { title: 'No Code Required', desc: 'Define tools with simple configuration files', icon: <FileText className="w-6 h-6" /> },
        { title: 'Built-in Security', desc: 'Automatic authentication and permission handling', icon: <Shield className="w-6 h-6" /> },
        { title: 'Community Ecosystem', desc: 'Share and leverage PE-specific research tools', icon: <Users className="w-6 h-6" /> }
      ],
      example: {
        name: 'sourceco/crm/salesforce-deals',
        description: 'Extract deal pipeline and relationship data',
        command: 'authentication: oauth2, endpoints: [deals, contacts, opportunities]'
      }
    },
    {
      id: 'enact-examples',
      title: 'PE-Specific Tool Examples',
      type: 'enact-tools',
      tools: [
        {
          category: 'Data Sources',
          items: [
            { name: 'CRM Extractors', desc: 'Pull deal pipeline and relationship data' },
            { name: 'Document Parsers', desc: 'Extract data from PDFs and presentations' },
            { name: 'Email Analyzers', desc: 'Mine deal information from email threads' },
            { name: 'Financial Data APIs', desc: 'Connect to PitchBook, CapitalIQ, Bloomberg' }
          ]
        },
        {
          category: 'Research Tools',
          items: [
            { name: 'Market Analyzers', desc: 'Autonomous market research with citations' },
            { name: 'Comparable Deal Finders', desc: 'Identify and analyze similar transactions' },
            { name: 'Industry Report Processors', desc: 'Extract insights from research reports' }
          ]
        },
        {
          category: 'Analysis Agents',
          items: [
            { name: 'Due Diligence Assistants', desc: 'Multi-step DD workflow automation' },
            { name: 'Valuation Modelers', desc: 'Automated comparable company analysis' },
            { name: 'Risk Assessors', desc: 'Systematic risk evaluation frameworks' }
          ]
        },
        {
          category: 'Workflow Automation',
          items: [
            { name: 'Pipeline Trackers', desc: 'Monitor deal progress and milestones' },
            { name: 'Report Generators', desc: 'Create investment memos and presentations' },
            { name: 'Alert Systems', desc: 'Notify on market changes and opportunities' }
          ]
        }
      ]
    },
    {
      id: 'roadmap',
      title: '12-Month Implementation Roadmap',
      type: 'timeline',
      phases: [
        { month: '0-3', title: 'Foundation', items: ['Core search infrastructure', 'Basic AI research agents', 'Key data connectors'], color: 'from-blue-400 to-blue-600' },
        { month: '3-6', title: 'Enhancement', items: ['Advanced research workflows', 'Citation systems', 'Tool marketplace'], color: 'from-purple-400 to-purple-600' },
        { month: '6-9', title: 'Optimization', items: ['Multi-step autonomous agents', 'Conversation memory', 'Performance tuning'], color: 'from-pink-400 to-pink-600' },
        { month: '9-12', title: 'Scale', items: ['Full autonomous capabilities', 'Community tool ecosystem', 'Advanced analytics'], color: 'from-green-400 to-green-600' }
      ]
    },
    {
      id: 'quick-wins',
      title: '90-Day Quick Wins',
      type: 'quick-wins',
      wins: [
        { title: 'Smart Search', icon: <Search className="w-6 h-6" /> },
        { title: 'Research Assistant', icon: <Brain className="w-6 h-6" /> },
        { title: 'Citation Tracking', icon: <FileText className="w-6 h-6" /> },
        { title: 'Tool Integration', icon: <GitBranch className="w-6 h-6" /> },
        { title: 'User Dashboard', icon: <Activity className="w-6 h-6" /> }
      ]
    },
    {
      id: 'education-strategy',
      title: 'Team Enablement Journey',
      type: 'education',
      modules: [
        { title: 'Foundation', desc: 'Understanding AI-powered research and basic query techniques', duration: '2 hours', level: 'Beginner', color: 'from-blue-400 to-blue-600' },
        { title: 'Practical Skills', desc: 'Hands-on training with research workflows and tool usage', duration: '3 hours', level: 'Intermediate', color: 'from-purple-400 to-purple-600' },
        { title: 'Advanced Features', desc: 'Power user capabilities and custom tool creation', duration: '2 hours', level: 'Advanced', color: 'from-pink-400 to-pink-600' }
      ]
    },
    {
      id: 'training-materials',
      title: 'Training Arsenal',
      type: 'training',
      materials: [
        { 
          type: 'One-Pager', 
          desc: 'PE-focused research agent overview for partners', 
          icon: <FileText className="w-8 h-8" />,
          link: '/conceptual-one-pager',
          time: '3 minutes',
          audience: 'Partners & Principals'
        },
        { 
          type: 'Interactive Scenario', 
          desc: 'Hands-on training with AI research workflows', 
          icon: <Users className="w-8 h-8" />,
          link: '/interactive-scenario',
          time: '45-60 minutes',
          audience: 'Analysts & Associates'
        }
      ]
    },
    {
      id: 'adoption-strategy',
      title: 'Driving Organizational Change',
      type: 'adoption',
      strategies: [
        { title: 'Champion Program', desc: 'Identify power users and early adopters', progress: 85 },
        { title: 'Workflow Integration', desc: 'Embed AI research into daily deal processes', progress: 75 },
        { title: 'Continuous Support', desc: 'Weekly office hours and responsive help desk', progress: 90 },
        { title: 'Feedback Loop', desc: 'Regular user input driving feature development', progress: 80 }
      ]
    },
    {
      id: 'platform-advantage',
      title: 'Strategic Platform Advantage',
      type: 'platform',
      advantages: [
        {
          title: 'Network Effects',
          desc: 'Each new tool increases platform value for all users',
          metric: '10x value growth with tool ecosystem'
        },
        {
          title: 'Democratization',
          desc: 'Business users create research workflows without technical skills',
          metric: '5x faster capability expansion'
        },
        {
          title: 'Industry Leadership',
          desc: 'Position as the go-to PE research automation platform',
          metric: 'First-mover advantage in PE research'
        },
        {
          title: 'Future-Proof',
          desc: 'Any new AI model can leverage existing tool ecosystem',
          metric: 'Zero integration cost for new AI'
        }
      ]
    },
    {
      id: 'success-metrics',
      title: 'Success Metrics Dashboard',
      type: 'metrics',
      metrics: [
        { name: 'Research Reports', current: 'From 2-3 per week', target: 'Target 20+ comprehensive analyses weekly', unit: '', progress: 15 },
        { name: 'Research Time', current: 'From 2-3 days per analysis', target: 'Target 2-3 hours with AI assistance', unit: '', progress: 75 },
        { name: 'Data Sources', current: 'From siloed searching', target: 'Target unified access across all systems', unit: '', progress: 40 },
        { name: 'Audit Compliance', current: 'From manual citation', target: 'Target 100% automated source tracking', unit: '', progress: 85 }
      ]
    },
    {
      id: 'conclusion',
      title: 'The Future is Intelligent & Practical',
      type: 'conclusion',
      points: [
        'AI agents that research like expert analysts, available 24/7',
        'Simple, reliable infrastructure that just works',
        'Complete transparency with citations and audit trails',
        'Extensible platform growing through community contributions',
        'Focus on results, not technology complexity'
      ]
    },
    {
      id: 'technical-deep-dive',
      title: 'Technical Architecture Deep Dive',
      type: 'technical-solutions',
      subtitle: 'Solving Core Integration Challenges',
      solutions: [
        {
          challenge: 'Unifying Disparate Data Sources',
          approach: 'Simple Direct Integrations with Unified Interface',
          technical: [
            'Direct API connections to existing systems (Salesforce, SharePoint, Gmail)',
            'PostgreSQL with pgvector for unified storage and semantic search',
            'Standardized data models for common PE entities (companies, deals, contacts)',
            'Real-time sync with change detection and incremental updates'
          ],
          diagram: 'Existing Systems → Direct APIs → PostgreSQL + pgvector → Unified Search',
          icon: <Database className="w-8 h-8" />
        },
        {
          challenge: 'Cross-System Permission Boundaries',
          approach: 'Permission Inheritance from Source Systems',
          technical: [
            'OAuth integration with existing authentication systems',
            'Permission mapping and inheritance from source systems',
            'Query-time access control with transparent filtering',
            'Full audit logging for compliance and security monitoring'
          ],
          diagram: 'User → Source System Auth → Permission Check → Filtered Results',
          icon: <Shield className="w-8 h-8" />
        },
        {
          challenge: 'PE Domain Intelligence',
          approach: 'Few-Shot Prompting with Domain-Specific Context',
          technical: [
            'Pre-built prompt templates for common PE research patterns',
            'Dynamic context injection based on user role and query type',
            'Few-shot learning from PE examples (no expensive training required)',
            'Continuous prompt improvement through user feedback loops'
          ],
          diagram: 'Query → PE Prompt Template → GPT-4/Claude → Domain-Aware Results',
          icon: <Brain className="w-8 h-8" />
        },
        {
          challenge: 'Research Context & Citation',
          approach: 'Session Memory with Full Source Attribution',
          technical: [
            'Conversation history tracking for context continuity',
            'Complete source attribution with confidence scoring',
            'Research trail visualization for audit and compliance',
            'Automated citation formatting for regulatory requirements'
          ],
          diagram: 'Query + Context → Research → Results + Citations → Audit Trail',
          icon: <Zap className="w-8 h-8" />
        }
      ]
    },
    {
      id: 'thank-you',
      title: 'Thank You',
      type: 'thank-you',
      subtitle: 'Questions & Discussion',
      contact: {
        email: 'keithalgroves@gmail.com',
        website: 'www.enactprotocol.com'
      }
    }
];
   

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setShowMenu(false);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);

  // Handle navigation from URL parameters
  useEffect(() => {
    const slideId = searchParams.get('slide');
    if (slideId) {
      const slideIndex = slides.findIndex(slide => slide.id === slideId);
      if (slideIndex !== -1) {
        setCurrentSlide(slideIndex);
      }
    }
  }, [searchParams]);

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide slide={slide} />;

      case 'content':
        return (
          <div className="flex flex-col min-h-full p-16 relative">
            <div className="absolute top-8 right-8 text-blue-600/20">
              {slide.icon}
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-12 flex items-center">
              <span className="mr-4 text-blue-600">{slide.icon}</span>
              {slide.title}
            </h2>
            <ul className="space-y-6 text-2xl flex-1">
              {slide.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start transform transition-all duration-500 hover:translate-x-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mr-4 mt-1 font-bold">▸</span>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'feature':
        return (
          <div className="flex flex-col min-h-full p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-1 shadow-2xl flex-1">
              <div className="bg-white rounded-3xl p-12">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 mr-6">{slide.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-800">{slide.workstream}</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">{slide.description}</p>
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8 flex-1">
              {slide.components.map((comp, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-blue-600 mb-4">{comp.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{comp.name}</h3>
                    <p className="text-gray-600">{comp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link 
                to="/technical-deep-dive" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Technical Deep Dive
              </Link>
            </div>
          </div>
        );

      case 'flow':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="space-y-4 flex-1">
              {slide.steps.map((step, idx) => (
                <div key={idx} className="flex items-center group">
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

      case 'ai-features':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-3 gap-6">
              {slide.features.map((feature, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full border border-gray-200 group-hover:border-purple-300 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'few-shot-strategy':
        return (
          <div className="flex flex-col min-h-full p-16 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-2xl text-gray-600 mb-12">{slide.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {slide.benefits.map((benefit, idx) => (
                <div key={idx} className="group">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{benefit.title}</h3>
                        <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                          {benefit.metric}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {slide.example && (
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">{slide.example.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">User Input:</h4>
                      <p className="text-sm italic">"{slide.example.input}"</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">AI Processing:</h4>
                      <p className="text-sm">{slide.example.processing}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Next Query:</h4>
                      <p className="text-sm italic">"{slide.example.nextQuery}"</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Result:</h4>
                      <p className="text-sm">{slide.example.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'deep-research':
        return (
          <div className="flex flex-col min-h-full p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-2xl text-gray-600 mb-12">{slide.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-8">
              {slide.capabilities.map((capability, idx) => (
                <div key={idx} className="group">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 group-hover:border-purple-400 transition-all duration-300 group-hover:shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                        {capability.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{capability.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{capability.desc}</p>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 border-l-4 border-purple-500">
                      <p className="text-sm text-gray-700 italic">Example: {capability.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Revolutionary Advantage</h3>
              <p className="text-lg">Transform from manual research to autonomous AI agents that work 24/7, delivering comprehensive analysis with full transparency and citations - just like having a team of expert analysts.</p>
            </div>
          </div>
        );

      case 'research-flow':
        return (
          <div className="flex flex-col min-h-full p-16 relative">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-2xl text-gray-600 mb-12">{slide.subtitle}</p>
            
            <div className="space-y-8">
              {slide.workflow.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Connection line */}
                  {idx < slide.workflow.length - 1 && (
                    <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  )}
                  
                  <div className="flex items-start group">
                    {/* Step indicator */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-8 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-purple-300">
                      <h3 className="text-3xl font-bold text-gray-800 mb-3">{step.step}</h3>
                      <p className="text-lg text-gray-600 mb-6">{step.desc}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <p className="text-lg text-gray-700"><strong>Result:</strong> Comprehensive deal analysis completed in hours instead of weeks, with full audit trail and source verification for compliance.</p>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="space-y-8">
              {slide.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-3 mr-6">
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        <span className="text-red-600">Challenge:</span> {item.challenge}
                      </h3>
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold text-green-600">Solution:</span> {item.solution}
                      </p>
                    </div>
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
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>
              {slide.phases.map((phase, idx) => (
                <div key={idx} className="relative pl-12 pb-10 group">
                  <div className="absolute left-0 w-5 h-5 rounded-full bg-white border-4 border-blue-600 -translate-x-2 group-hover:scale-125 transition-transform"></div>
                  <div className={`bg-gradient-to-r ${phase.color} rounded-2xl p-6 text-white shadow-xl`}>
                    <h3 className="text-2xl font-bold mb-3">Months {phase.month}: {phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
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
            <h2 className="text-5xl font-bold text-gray-800 mb-12 flex items-center">
              <Zap className="w-12 h-12 text-yellow-500 mr-4" />
              {slide.title}
            </h2>
            <div className="grid grid-cols-5 gap-4">
              {slide.wins.map((win, idx) => (
                <div key={idx} className="group">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-1 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="bg-white rounded-2xl p-6 h-full">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                        {win.icon}
                      </div>
                      <h3 className="text-center font-semibold text-gray-800">{win.title}</h3>
                    </div>
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
              {slide.modules.map((module, idx) => (
                <div key={idx} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-200 group-hover:border-purple-300 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <Lightbulb className="w-10 h-10 text-purple-600" />
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${module.color} text-white`}>
                        {module.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{module.title}</h3>
                    <p className="text-gray-600 mb-4">{module.desc}</p>
                    <div className="flex items-center text-purple-600 font-semibold">
                      <Calendar className="w-5 h-5 mr-2" />
                      {module.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'training':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {slide.materials.map((material, idx) => (
                <Link key={idx} to={material.link} className="group">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    <div className="bg-white rounded-3xl p-8 h-full">
                      <div className="flex items-start space-x-6">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 flex-shrink-0">
                          <div className="text-white">{material.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                            {material.type}
                          </h3>
                          <p className="text-gray-600 mb-4">{material.desc}</p>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-purple-500" />
                                <span className="text-gray-600">{material.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Target className="w-4 h-4 text-purple-500" />
                                <span className="text-gray-600">{material.audience}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 text-purple-600 font-medium group-hover:text-purple-700">
                              <span>Launch</span>
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Training Journey</h3>
                <div className="flex items-center justify-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Start with One-Pager (Partners)</span>
                  </div>
                  <ArrowRight className="text-purple-400" size={20} />
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Hands-on Training (Team)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'adoption':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="space-y-6">
              {slide.strategies.map((strategy, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-semibold text-gray-800">{strategy.title}</h3>
                    <span className="text-lg font-bold text-purple-600">{strategy.progress}%</span>
                  </div>
                  <p className="text-gray-600 mb-4">{strategy.desc}</p>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${strategy.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'enact':
        return (
          <div className="flex flex-col min-h-full p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">{slide.title}</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8">{slide.subtitle}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {slide.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-xl p-2 md:p-3 text-white flex-shrink-0">
                    {React.cloneElement(benefit.icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 text-gray-100 font-mono text-xs md:text-sm overflow-x-auto">
              <div className="mb-2 text-green-400"># Example Enact Tool Definition</div>
              <div><span className="text-blue-400">name:</span> {slide.example.name}</div>
              <div><span className="text-blue-400">description:</span> "{slide.example.description}"</div>
              <div className="break-all"><span className="text-blue-400">command:</span> "{slide.example.command}"</div>
            </div>
          </div>
        );

      case 'enact-tools':
        return (
          <div className="flex flex-col min-h-full p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-y-auto">
              {slide.tools.map((category, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center">{category.category}</h3>
                  <div className="space-y-2 md:space-y-3">
                    {category.items.map((tool, i) => (
                      <div key={i} className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-md hover:shadow-xl transition-all duration-300">
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">{tool.name}</h4>
                        <p className="text-xs md:text-sm text-gray-600">{tool.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'platform':
        return (
          <div className="flex flex-col min-h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.advantages.map((advantage, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{advantage.desc}</p>
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {advantage.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="flex flex-col min-h-full p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 md:mb-12">{slide.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {slide.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{metric.name}</h3>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl font-bold text-blue-600">{metric.current}</div>
                      <div className="text-xs md:text-sm text-gray-500">Target: {metric.target}</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 md:h-4 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        metric.progress >= 75 ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                        metric.progress >= 50 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                        'bg-gradient-to-r from-red-400 to-red-600'
                      }`}
                      style={{ width: `${metric.progress}%` }}
                    ></div>
                  </div>
                  {metric.unit && <p className="text-xs md:text-sm text-gray-600 mt-2">{metric.unit}</p>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="flex flex-col min-h-full p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
            <div className="relative z-10">
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-16">{slide.title}</h2>
              <div className="space-y-6">
                {slide.points.map((point, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-12 rounded-full mr-6"></div>
                    <p className="text-2xl text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 flex justify-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl">
                  Let's Build the Future Together
                </div>
              </div>
            </div>
          </div>
        );

      case 'technical-solutions':
        return (
          <div className="flex flex-col min-h-full p-12 relative overflow-hidden">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">{slide.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{slide.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-6 overflow-y-auto">
              {slide.solutions.map((solution, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 group hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{solution.challenge}</h3>
                      <p className="text-sm text-blue-600 font-semibold">{solution.approach}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {solution.technical.map((tech, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500">
                    <p className="text-xs text-gray-600 font-mono">{solution.diagram}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border-l-4 border-blue-500">
              <p className="text-sm text-gray-700"><strong>Integration Approach:</strong> All components work together through event-driven architecture, ensuring real-time updates, consistent security, and seamless user experience across the unified platform.</p>
            </div>
          </div>
        );

      case 'thank-you':
        return (
          <div className="flex flex-col items-center justify-center min-h-full p-16 text-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Main thank you message */}
              <div className="mb-12">
                <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                  {slide.title}
                </h1>
                <p className="text-3xl text-gray-300 font-light">
                  {slide.subtitle}
                </p>
              </div>

              {/* Contact information */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-center space-x-4 text-xl text-gray-400">
                  <span className="text-blue-500">✉</span>
                  <span>{slide.contact.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-xl text-gray-400">
                  <span className="text-purple-500">🌐</span>
                  <span>{slide.contact.website}</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center items-center space-x-8 text-gray-500">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <span className="text-lg">Innovation</span>
                </div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Rocket className="w-6 h-6 text-blue-500" />
                  <span className="text-lg">Growth</span>
                </div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Brain className="w-6 h-6 text-purple-500" />
                  <span className="text-lg">Intelligence</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-700 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-200 text-gray-300 hover:text-white"
          >
            {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <h1 className="text-2xl font-bold text-white">Presentation</h1>
        </div>
        
        <div className="text-sm text-gray-400">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-start justify-start">
          <div className="bg-gray-900 w-80 h-full shadow-2xl overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-6">Navigation</h2>
              <ul className="space-y-2">
                {slides.map((slide, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setCurrentSlide(index);
                        setShowMenu(false);
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        currentSlide === index
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {slide.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Slide Content */}
      <div className="flex-1 flex items-start justify-center p-4 md:p-6 lg:p-8 py-8">
        <div className={`max-w-7xl w-full min-h-[80vh] bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-y-auto transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {renderSlideContent(slides[currentSlide])}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="fixed left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-200 text-white group z-10"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-200 text-white group z-10"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Progress Bar */}
      <div className="h-1.5 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 shadow-lg"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PresentationSlideshow;
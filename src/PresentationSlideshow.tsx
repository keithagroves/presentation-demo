import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, X, Database, Search, Workflow, FileText, Users, Lightbulb, Calendar, Target, Brain, Zap, Globe, Shield, Rocket, TrendingUp, Bot, Sparkles, Network, Layers, GitBranch, Activity, Clock, CheckCircle, Star, BarChart3, Award, Settings, Archive, Play } from 'lucide-react';
import { TitleSlide } from './components/TitleSlide';
import { slidesData } from './data/slidesData';

const PresentationSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 'title',
      title: 'Strategic AI Assessment',
      subtitle: 'From Fragmentation to Integration',
      type: 'title'
    },
    {
      id: 'overview',
      title: 'The Vision',
      type: 'content',
      icon: <Rocket className="w-8 h-8" />,
      bullets: [
        'Current State: Fragmented data environment',
        'Future Vision: Unified AI system for intelligent workflows',
        'Goal: Transform private equity deal sourcing',
        'Innovation: Extensible platform leveraging open standards'
      ]
    },
    {
      id: 'workstream-choice',
      title: 'Chosen Workstream',
      type: 'feature',
      workstream: 'Search & Research Across All Data',
      description: 'Building a unified search system that seamlessly integrates structured and unstructured data sources',
      icon: <Search className="w-16 h-16" />
    },
    {
      id: 'architecture',
      title: 'System Architecture',
      type: 'architecture',
      components: [
        { name: 'Schema-Agnostic Ingestion', desc: 'Kafka + Delta Lake for unified data streaming and storage', icon: <Database className="w-8 h-8" /> },
        { name: 'Semantic Index Layer', desc: 'Elasticsearch with vector embeddings and entity graphs', icon: <Layers className="w-8 h-8" /> },
        { name: 'AI Processing Engine', desc: 'PE-tuned models for ranking and entity resolution', icon: <Brain className="w-8 h-8" /> },
        { name: 'Context-Aware Query Engine', desc: 'Session graphs with conversational memory', icon: <Zap className="w-8 h-8" /> },
        { name: 'Zero-Trust Security Layer', desc: 'Dynamic policy engine with row-level permissions', icon: <Shield className="w-8 h-8" /> },
        { name: 'Enact Protocol Registry', desc: 'Secure tool orchestration with versioning', icon: <GitBranch className="w-8 h-8" /> }
      ]
    },
    {
      id: 'data-flow',
      title: 'Data Flow Architecture',
      type: 'flow',
      steps: [
        'Kafka streams ingest data from heterogeneous sources (CRM, email, docs, DBs)',
        'Delta Lake stores schema-evolved data with full lineage and versioning',
        'AI models generate embeddings, extract entities, and build context graphs',
        'Security policies dynamically filter data based on user permissions',
        'Context-aware ranking delivers personalized, PE-relevant results'
      ]
    },
    {
      id: 'ai-implementation',
      title: 'AI Implementation Strategy',
      type: 'ai-features',
      features: [
        { title: 'Vector Embeddings', desc: 'Semantic search capabilities', icon: <Network className="w-6 h-6" /> },
        { title: 'Entity Recognition', desc: 'PE-specific term extraction', icon: <Bot className="w-6 h-6" /> },
        { title: 'ML Ranking', desc: 'Intelligent relevance scoring', icon: <TrendingUp className="w-6 h-6" /> },
        { title: 'Autonomous Agents', desc: 'Self-directed research workflows', icon: <Brain className="w-6 h-6" /> },
        { title: 'Citation Engine', desc: 'Full source attribution & audit trails', icon: <FileText className="w-6 h-6" /> },
        { title: 'Cross-lingual', desc: 'Multi-language support', icon: <Globe className="w-6 h-6" /> }
      ]
    },
    {
      id: 'deep-research-ai',
      title: 'Deep Research AI Agents',
      type: 'deep-research',
      subtitle: 'Autonomous Multi-Step Research for PE Professionals',
      capabilities: [
        {
          title: 'Autonomous Planning',
          desc: 'AI breaks complex research questions into sub-tasks and executes them independently',
          icon: <Brain className="w-6 h-6" />,
          example: 'Given "Analyze SaaS market in DACH region", AI creates plan: market size → key players → growth trends → investment opportunities'
        },
        {
          title: 'Dynamic Tool Orchestration',
          desc: 'Intelligently chains multiple tools and data sources based on findings',
          icon: <Network className="w-6 h-6" />,
          example: 'Starts with web search → identifies companies → pulls CRM data → analyzes financials → generates comp analysis'
        },
        {
          title: 'Adaptive Iteration',
          desc: 'Learns from results and adjusts research strategy in real-time',
          icon: <GitBranch className="w-6 h-6" />,
          example: 'If initial search yields poor results, AI reformulates queries and explores alternative data sources'
        },
        {
          title: 'Synthesis with Citations',
          desc: 'Compiles comprehensive reports with full source attribution and reasoning chains',
          icon: <FileText className="w-6 h-6" />,
          example: 'Investment memo with every claim linked to specific data points, creating audit trail for compliance'
        }
      ]
    },
    {
      id: 'research-workflow',
      title: 'Autonomous Research Workflow',
      type: 'research-flow',
      subtitle: 'How Deep Research AI Transforms Deal Analysis',
      workflow: [
        {
          step: 'Query Planning',
          desc: 'AI breaks "Analyze potential acquisition targets in fintech" into research sub-tasks',
          details: ['Market landscape analysis', 'Company identification', 'Financial assessment', 'Strategic fit evaluation'],
          icon: <Brain className="w-8 h-8" />
        },
        {
          step: 'Dynamic Search',
          desc: 'Executes targeted searches across multiple data sources',
          details: ['Web research for market trends', 'CRM queries for existing relationships', 'Financial database searches', 'News sentiment analysis'],
          icon: <Search className="w-8 h-8" />
        },
        {
          step: 'Adaptive Learning',
          desc: 'Analyzes results and refines search strategy',
          details: ['Evaluates information quality', 'Identifies knowledge gaps', 'Reformulates queries', 'Explores new data sources'],
          icon: <GitBranch className="w-8 h-8" />
        },
        {
          step: 'Report Synthesis',
          desc: 'Compiles comprehensive analysis with full citations',
          details: ['Executive summary with key findings', 'Detailed analysis sections', 'Source attribution for all claims', 'Confidence scoring for insights'],
          icon: <FileText className="w-8 h-8" />
        }
      ]
    },
    {
      id: 'challenges',
      title: 'Top 3 Challenges & Solutions',
      type: 'challenges',
      items: [
        { challenge: 'Research Complexity', solution: 'Autonomous AI agents that plan and execute multi-step research workflows with adaptive learning', icon: <Brain className="w-8 h-8" /> },
        { challenge: 'Information Verification', solution: 'Citation engines with source attribution and confidence scoring for all insights', icon: <Shield className="w-8 h-8" /> },
        { challenge: 'Tool Integration', solution: 'Dynamic tool orchestration that learns optimal combinations through reinforcement learning', icon: <Target className="w-8 h-8" /> }
      ]
    },
    {
      id: 'enact-integration',
      title: 'Extensibility Through Enact Protocol',
      type: 'enact',
      subtitle: 'Transform Any Tool into an AI Capability',
      benefits: [
        { title: 'Rapid Integration', desc: 'Add new data sources in hours, not weeks', icon: <Zap className="w-6 h-6" /> },
        { title: 'No Code Required', desc: 'Define tools with simple YAML configuration', icon: <FileText className="w-6 h-6" /> },
        { title: 'Version Control', desc: 'Built-in versioning and security signatures', icon: <Shield className="w-6 h-6" /> },
        { title: 'Community Ecosystem', desc: 'Leverage and contribute PE-specific tools', icon: <Users className="w-6 h-6" /> }
      ],
      example: {
        name: 'sourceco/data/salesforce-extractor',
        description: 'Extracts and normalizes deal data from Salesforce',
        command: "npx sf-cli@2.0.0 query --soql '${query}' --format json"
      }
    },
    {
      id: 'enact-examples',
      title: 'PE-Specific Tool Examples',
      type: 'enact-tools',
      tools: [
        {
          category: 'Data Extraction',
          items: [
            { name: 'DDQ Scanner', desc: 'Extract key fields from due diligence questionnaires' },
            { name: 'PDF Analyzer', desc: 'Parse complex PE documents and tables' },
            { name: 'Email Parser', desc: 'Extract deal info from email threads' }
          ]
        },
        {
          category: 'AI Analysis',
          items: [
            { name: 'Entity Extractor', desc: 'Identify firms, partners, and deal entities' },
            { name: 'Sentiment Analyzer', desc: 'Assess market sentiment from news' },
            { name: 'Comp Finder', desc: 'Find comparable deals automatically' }
          ]
        },
        {
          category: 'Workflows',
          items: [
            { name: 'Deal Pipeline', desc: 'Complete deal analysis workflow' },
            { name: 'Report Generator', desc: 'Create investment memos' },
            { name: 'Alert System', desc: 'Monitor deal triggers' }
          ]
        },
        {
          category: 'Deep Research Agents',
          items: [
            { name: 'Market Analyzer', desc: 'Autonomous market research with citation tracking' },
            { name: 'Deal Investigator', desc: 'Multi-step due diligence with adaptive planning' },
            { name: 'Comp Generator', desc: 'Self-directed comparable deal analysis' }
          ]
        }
      ]
    },
    {
      id: 'roadmap',
      title: '12-Month Implementation Roadmap',
      type: 'timeline',
      phases: [
        { month: '0-3', title: 'Foundation', items: ['Basic search infrastructure', 'Initial data connectors', 'Deep research AI prototype'], color: 'from-blue-400 to-blue-600' },
        { month: '3-6', title: 'Enhancement', items: ['Autonomous research agents', 'Citation & audit trails', 'Advanced tool orchestration'], color: 'from-purple-400 to-purple-600' },
        { month: '6-9', title: 'Optimization', items: ['Multi-step workflow automation', 'Reinforcement learning optimization', 'Research agent marketplace'], color: 'from-pink-400 to-pink-600' },
        { month: '9-12', title: 'Scale', items: ['Full autonomous capabilities', 'Industry-specific research agents', 'Community-driven agent library'], color: 'from-green-400 to-green-600' }
      ]
    },
    {
      id: 'quick-wins',
      title: '90-Day Quick Wins',
      type: 'quick-wins',
      wins: [
        { title: 'Autonomous Deal Analysis', icon: <Brain className="w-6 h-6" /> },
        { title: 'Citation & Audit Trails', icon: <FileText className="w-6 h-6" /> },
        { title: 'Research Agent Hub', icon: <GitBranch className="w-6 h-6" /> },
        { title: 'Multi-Step Workflows', icon: <Workflow className="w-6 h-6" /> },
        { title: 'Insight Dashboard', icon: <Activity className="w-6 h-6" /> }
      ]
    },
    {
      id: 'education-strategy',
      title: 'Team Enablement Journey',
      type: 'education',
      modules: [
        { title: 'Foundation', desc: 'Understanding AI-powered search', duration: '2 hours', level: 'Beginner', color: 'from-blue-400 to-blue-600' },
        { title: 'Practical Skills', desc: 'Hands-on search techniques', duration: '3 hours', level: 'Intermediate', color: 'from-purple-400 to-purple-600' },
        { title: 'Advanced Features', desc: 'Power user capabilities', duration: '2 hours', level: 'Advanced', color: 'from-pink-400 to-pink-600' }
      ]
    },
    {
      id: 'training-materials',
      title: 'Training Arsenal',
      type: 'training',
      materials: [
        { type: 'Visual Guide', desc: 'One-pager concept explanation', icon: <FileText className="w-8 h-8" /> },
        { type: 'Tutorials', desc: 'Step-by-step workflows', icon: <Workflow className="w-8 h-8" /> },
        { type: 'Quick Ref', desc: 'Common search patterns', icon: <Zap className="w-8 h-8" /> },
        { type: 'Videos', desc: 'Role-specific training', icon: <Users className="w-8 h-8" /> }
      ]
    },
    {
      id: 'adoption-strategy',
      title: 'Driving Organizational Change',
      type: 'adoption',
      strategies: [
        { title: 'Champion Program', desc: 'Identify and empower super-users', progress: 85 },
        { title: 'Workflow Integration', desc: 'Embed in daily operations', progress: 75 },
        { title: 'Continuous Support', desc: 'Weekly office hours & help', progress: 90 },
        { title: 'Feedback Loop', desc: 'Iterate based on user input', progress: 80 }
      ]
    },
    {
      id: 'platform-advantage',
      title: 'Strategic Platform Advantage',
      type: 'platform',
      advantages: [
        {
          title: 'Network Effects',
          desc: 'Each new tool makes the platform more valuable',
          metric: '10x value growth with tool ecosystem'
        },
        {
          title: 'Democratization',
          desc: 'Business users can create tools without coding',
          metric: '5x faster capability expansion'
        },
        {
          title: 'Industry Standard',
          desc: 'Position SourceCo as the PE automation hub',
          metric: 'First-mover advantage in PE tools'
        },
        {
          title: 'Future-Proof',
          desc: 'Any new AI model can use all existing tools',
          metric: 'Zero integration cost for new AI'
        }
      ]
    },
    {
      id: 'success-metrics',
      title: 'Success Metrics Dashboard',
      type: 'metrics',
      metrics: [
        { name: 'Research Reports', current: '15', target: '100+', unit: 'reports/week', progress: 15 },
        { name: 'Citation Accuracy', current: '94%', target: '99%', unit: '', progress: 94 },
        { name: 'Research Agents', current: '5', target: '50+', unit: 'agents', progress: 10 },
        { name: 'Analysis Time', current: '8hrs', target: '30min', unit: 'per deal', progress: 75 }
      ]
    },
    {
      id: 'conclusion',
      title: 'The Future is Intelligent & Extensible',
      type: 'conclusion',
      points: [
        'Autonomous AI agents that research like expert analysts',
        'Multi-step workflows with adaptive learning and backtracking',
        'Complete transparency with citations and audit trails',
        'Infinitely extensible through community-driven agent ecosystem',
        'Platform approach: Not just search, but autonomous PE intelligence'
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
          approach: 'Schema-Agnostic Data Lake with AI Normalization',
          technical: [
            'Apache Kafka for real-time data streaming from all sources',
            'Delta Lake with schema evolution for flexible data storage',
            'AI-powered entity resolution using ML models trained on PE data',
            'GraphQL federation layer providing unified query interface'
          ],
          diagram: 'CRM → Kafka → Delta Lake ← Email/Docs ← Financial DBs',
          icon: <Database className="w-8 h-8" />
        },
        {
          challenge: 'Cross-System Permission Boundaries',
          approach: 'Zero-Trust Security with Dynamic Policy Engine',
          technical: [
            'OAuth 2.0/OIDC integration with all source systems',
            'Policy engine evaluating permissions at query time',
            'Row-level security applied to unified index',
            'Audit logging for all access patterns and data lineage'
          ],
          diagram: 'User → Policy Engine → Source Auth → Filtered Results',
          icon: <Shield className="w-8 h-8" />
        },
        {
          challenge: 'PE-Specific Relevancy Ranking',
          approach: 'Domain-Aware Learning-to-Rank Models',
          technical: [
            'BERT models fine-tuned on PE documents and terminology',
            'Learning-to-rank using historical user interaction data',
            'Multi-signal ranking: content, recency, user context, deal stage',
            'A/B testing framework for continuous model improvement'
          ],
          diagram: 'Query → Entity Extraction → Scoring → Ranking → Results',
          icon: <TrendingUp className="w-8 h-8" />
        },
        {
          challenge: 'Maintaining Search Context',
          approach: 'Conversational Memory with Session Graphs',
          technical: [
            'Session-based context graphs tracking entity relationships',
            'Vector embeddings for semantic similarity across queries',
            'LLM-powered query expansion using conversation history',
            'Temporal context weighting based on search patterns'
          ],
          diagram: 'Query History → Context Graph → Enhanced Query → Results',
          icon: <Brain className="w-8 h-8" />
        }
      ]
    },
    {
      id: 'context-management',
      title: 'Intelligent Context Management',
      type: 'context-system',
      subtitle: 'Maintaining Search Context Across Related Queries',
      features: [
        {
          title: 'Session Memory Graph',
          description: 'Tracks entities, relationships, and concepts across search sessions',
          technical: 'Graph database storing user interactions, entity relationships, and temporal patterns',
          benefit: 'Understands that "ABC Corp" in query 1 relates to "portfolio company" in query 3',
          icon: <Network className="w-8 h-8" />
        },
        {
          title: 'Semantic Query Expansion',
          description: 'Automatically enhances queries using conversation history',
          technical: 'Vector similarity search on previous queries + LLM-powered expansion',
          benefit: 'Query "recent deals" becomes "recent deals similar to ABC Corp SaaS acquisition"',
          icon: <Brain className="w-8 h-8" />
        },
        {
          title: 'Contextual Ranking Boost',
          description: 'Prioritizes results related to current research thread',
          technical: 'Context vector added to ranking signals with decay over time',
          benefit: 'Results about SaaS companies rank higher when researching SaaS market',
          icon: <TrendingUp className="w-8 h-8" />
        },
        {
          title: 'Research Trail Visualization',
          description: 'Shows how current search relates to previous queries',
          technical: 'Interactive graph UI displaying query relationships and entity connections',
          benefit: 'Users see research breadcrumbs and can backtrack or explore related paths',
          icon: <GitBranch className="w-8 h-8" />
        }
      ],
      example: {
        scenario: 'SaaS Market Research Session',
        queries: [
          { step: 1, query: 'SaaS companies in DACH region', context: 'Initial market exploration' },
          { step: 2, query: 'enterprise software valuations', context: 'System remembers SaaS focus, surfaces SaaS-specific valuations' },
          { step: 3, query: 'competitive landscape', context: 'Auto-scoped to DACH SaaS based on session context' },
          { step: 4, query: 'due diligence checklist', context: 'Prioritizes SaaS-specific DD items from context' }
        ]
      }
    },
    {
      id: 'conceptual-one-pager',
      title: 'Your Personal Research Analyst',
      type: 'interactive-demo',
      subtitle: 'PE-Focused AI Agent Overview',
      description: 'See how autonomous research agents transform PE deal analysis in 3 minutes',
      scenario: {
        title: 'AI-Powered PE Research',
        role: 'Partner or Principal',
        situation: 'Need to understand autonomous research agent value proposition',
        challenge: 'Quickly grasp how AI transforms traditional PE research workflows',
        objectives: [
          'Understand the PE research time savings',
          'See specific use cases for deal workflows',
          'Grasp the "personal analyst" concept',
          'Appreciate IC-ready output quality'
        ]
      }
    },
    {
      id: 'interactive-scenario',
      title: 'Interactive Training Scenario',
      type: 'interactive-demo',
      subtitle: 'Learn Through Realistic Usage',
      description: 'Experience AI-powered deal research through a hands-on training exercise',
      scenario: {
        title: 'AI-Powered Deal Research',
        role: 'Senior Associate at SourceCo Partners',
        situation: 'Potential acquisition target: TechFlow Solutions (B2B SaaS logistics)',
        challenge: 'Complete preliminary research in 2 hours vs usual 8+ hours',
        objectives: [
          'Master autonomous research agent workflow',
          'Guide AI through complex multi-step analysis',
          'Validate and refine AI-generated insights',
          'Synthesize findings for executive presentation'
        ]
      }
    },
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
            <div className="grid grid-cols-2 gap-8">
              {slide.materials.map((material, idx) => (
                <div key={idx} className="group">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 group-hover:shadow-2xl transition-all duration-300">
                    <div className="bg-white rounded-3xl p-8 h-full flex items-center">
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 mr-6">
                        <div className="text-white">{material.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{material.type}</h3>
                        <p className="text-gray-600">{material.desc}</p>
                      </div>
                    </div>
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

      case 'context-system':
        return (
          <div className="flex flex-col min-h-full p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-2xl text-gray-600 mb-12">{slide.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {slide.features.map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border-2 border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="bg-white rounded-lg p-3 mb-3 border-l-4 border-green-500">
                    <p className="text-sm text-gray-700"><strong>Technical:</strong> {feature.technical}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-3">
                    <p className="text-sm text-gray-700"><strong>Benefit:</strong> {feature.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{slide.example.scenario}</h3>
              <div className="space-y-4">
                {slide.example.queries.map((query, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      {query.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">"{query.query}"</p>
                      <p className="text-sm text-gray-600 mt-1">{query.context}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'interactive-demo':
        return (
          <div className="flex flex-col min-h-full p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">{slide.title}</h2>
            <p className="text-2xl text-gray-600 mb-12">{slide.subtitle}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-6">{slide.scenario.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Your Role:</h4>
                    <p className="text-green-600">{slide.scenario.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Situation:</h4>
                    <p className="text-green-600">{slide.scenario.situation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Challenge:</h4>
                    <p className="text-green-600">{slide.scenario.challenge}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Learning Objectives</h3>
                <ul className="space-y-3">
                  {slide.scenario.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to={slide.id === 'conceptual-one-pager' ? '/conceptual-one-pager' : '/interactive-scenario'}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group text-xl font-semibold"
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                {slide.id === 'conceptual-one-pager' ? 'View One-Pager' : 'Start Interactive Scenario'}
              </Link>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{slide.id === 'conceptual-one-pager' ? '3 minutes' : '45-60 minutes'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{slide.id === 'conceptual-one-pager' ? 'Partners & stakeholders' : 'Individual or small groups'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>{slide.id === 'conceptual-one-pager' ? 'Quick overview' : 'Hands-on learning'}</span>
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
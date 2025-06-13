import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Database, Search, Workflow, FileText, Users, Lightbulb, Calendar, Target, Brain, Zap, Globe, Shield, Rocket, TrendingUp, Award, Bot, Sparkles, Network, Layers, GitBranch, Activity } from 'lucide-react';

const PresentationSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 'title',
      title: 'SourceCo Strategic AI',
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
        { name: 'Data Ingestion Layer', desc: 'Connectors for all data sources', icon: <Database className="w-8 h-8" /> },
        { name: 'Unified Index', desc: 'Elasticsearch-based semantic search', icon: <Layers className="w-8 h-8" /> },
        { name: 'AI Processing', desc: 'NLP and embedding models', icon: <Brain className="w-8 h-8" /> },
        { name: 'Query Engine', desc: 'Multi-modal search capabilities', icon: <Zap className="w-8 h-8" /> },
        { name: 'Tool Registry', desc: 'Enact Protocol integration', icon: <GitBranch className="w-8 h-8" /> },
        { name: 'Execution Layer', desc: 'Secure tool orchestration', icon: <Shield className="w-8 h-8" /> }
      ]
    },
    {
      id: 'data-flow',
      title: 'Data Flow Architecture',
      type: 'flow',
      steps: [
        'Data sources push/pull to ingestion layer',
        'Processing pipeline normalizes and enriches data',
        'AI models generate embeddings and metadata',
        'Unified index stores searchable content',
        'Query engine provides intelligent results'
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
        { title: 'Query Understanding', desc: 'Intent recognition & expansion', icon: <Sparkles className="w-6 h-6" /> },
        { title: 'Cross-lingual', desc: 'Multi-language support', icon: <Globe className="w-6 h-6" /> }
      ]
    },
    {
      id: 'challenges',
      title: 'Top 4 Challenges & Solutions',
      type: 'challenges',
      items: [
        { challenge: 'Data Heterogeneity', solution: 'Flexible schema mapping and AI-powered normalization', icon: <GitBranch className="w-8 h-8" /> },
        { challenge: 'Data Drift', solution: 'Continuous monitoring and automated model retraining pipelines', icon: <Activity className="w-8 h-8" /> },
        { challenge: 'Permission Management', solution: 'Granular access control with real-time filtering', icon: <Shield className="w-8 h-8" /> },
        { challenge: 'Search Relevance', solution: 'PE-specific ranking models trained on user feedback', icon: <Target className="w-8 h-8" /> }
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
        }
      ]
    },
    {
      id: 'roadmap',
      title: '12-Month Implementation Roadmap',
      type: 'timeline',
      phases: [
        { month: '0-3', title: 'Foundation', items: ['Basic search infrastructure', 'Initial data connectors', '10 core Enact tools'], color: 'from-blue-400 to-blue-600' },
        { month: '3-6', title: 'Enhancement', items: ['AI models integration', 'Advanced search features', '50+ Enact tools'], color: 'from-purple-400 to-purple-600' },
        { month: '6-9', title: 'Optimization', items: ['Performance tuning', 'User feedback integration', 'Tool marketplace launch'], color: 'from-pink-400 to-pink-600' },
        { month: '9-12', title: 'Scale', items: ['Full data source coverage', 'Advanced AI capabilities', '200+ community tools'], color: 'from-green-400 to-green-600' }
      ]
    },
    {
      id: 'quick-wins',
      title: '90-Day Quick Wins',
      type: 'quick-wins',
      wins: [
        { title: 'Unified CRM Search', icon: <Database className="w-6 h-6" /> },
        { title: 'Smart Filters', icon: <Search className="w-6 h-6" /> },
        { title: 'Enact Tool Hub', icon: <GitBranch className="w-6 h-6" /> },
        { title: 'Export Features', icon: <FileText className="w-6 h-6" /> },
        { title: 'Analytics Dashboard', icon: <Activity className="w-6 h-6" /> }
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
        { name: 'Search Volume', current: '45', target: '100+', unit: 'searches/day', progress: 45 },
        { name: 'User Satisfaction', current: '72%', target: '85%', unit: '', progress: 72 },
        { name: 'Tool Library', current: '25', target: '200+', unit: 'tools', progress: 12 },
        { name: 'Integration Time', current: '2hrs', target: '30min', unit: 'per source', progress: 60 }
      ]
    },
    {
      id: 'conclusion',
      title: 'The Future is Intelligent & Extensible',
      type: 'conclusion',
      points: [
        'Unified intelligence layer for all PE operations',
        'AI that understands PE context and terminology',
        'Infinitely extensible through Enact Protocol',
        'Community-driven tool ecosystem',
        'Platform approach: Not just search, but PE intelligence hub'
      ]
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

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent"></div>
            <div className="relative z-10">
              <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-fade-in">{slide.title}</h1>
              <h2 className="text-4xl text-gray-700 font-light animate-fade-in-delay">{slide.subtitle}</h2>
              <div className="mt-16 flex justify-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse delay-75"></div>
                <div className="w-3 h-3 rounded-full bg-pink-600 animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="flex flex-col h-full p-16 relative">
            <div className="absolute top-8 right-8 text-blue-600/20">
              {slide.icon}
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-12 flex items-center">
              <span className="mr-4 text-blue-600">{slide.icon}</span>
              {slide.title}
            </h2>
            <ul className="space-y-6 text-2xl">
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
          <div className="flex flex-col h-full p-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-1 shadow-2xl">
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
          <div className="flex flex-col h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
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
          </div>
        );

      case 'flow':
        return (
          <div className="flex flex-col h-full p-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">{slide.title}</h2>
            <div className="space-y-4">
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
          <div className="flex flex-col h-full p-16">
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

      case 'challenges':
        return (
          <div className="flex flex-col h-full p-16">
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
          <div className="flex flex-col h-full p-16">
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
          <div className="flex flex-col h-full p-16">
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
          <div className="flex flex-col h-full p-16">
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
          <div className="flex flex-col h-full p-16">
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
          <div className="flex flex-col h-full p-16">
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
          <div className="flex flex-col h-full p-8 md:p-12 lg:p-16 relative overflow-hidden">
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
          <div className="flex flex-col h-full p-8 md:p-12 lg:p-16">
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
          <div className="flex flex-col h-full p-16">
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
          <div className="flex flex-col h-full p-8 md:p-12 lg:p-16">
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
          <div className="flex flex-col h-full p-16 relative overflow-hidden">
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

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-700 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-200 text-gray-300 hover:text-white"
          >
            {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">SourceCo AI Assessment</h1>
            <p className="text-sm text-gray-400">Strategic Vision Presentation</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-400">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <div className="flex space-x-1">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Slide Menu */}
        {showMenu && (
          <div className="absolute left-0 top-0 bottom-0 w-96 bg-gray-900/95 backdrop-blur-xl border-r border-gray-700 z-20 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Navigation</h2>
              <ul className="space-y-2">
                {slides.map((slide, idx) => (
                  <li key={slide.id}>
                    <button
                      onClick={() => goToSlide(idx)}
                      className={`w-full text-left px-5 py-3 rounded-xl transition-all duration-200 ${
                        currentSlide === idx
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3 text-sm opacity-60">{idx + 1}</span>
                        <span>{slide.title}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Slide Content */}
        <div className="h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className={`max-w-7xl w-full h-full bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {renderSlideContent(slides[currentSlide])}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-200 text-white group"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-gray-800/80 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-200 text-white group"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 shadow-lg"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
};

export default PresentationSlideshow;
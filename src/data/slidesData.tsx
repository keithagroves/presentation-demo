import React from 'react';
import { 
  Database, Search, Workflow, FileText, Users, 
  Brain, Zap, Shield, Rocket, Layers, 
  GitBranch, Activity, Target, Globe, Bot, 
  Sparkles, Network, TrendingUp, Clock, 
  CheckCircle, Star, BarChart3, Lightbulb,
  Settings, Archive, Award, Calendar
} from 'lucide-react';

export const slidesData: any[] = [
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
      { name: 'AI Research Engine', desc: 'GPT-4/Claude with PE-specific prompting and reasoning', icon: <Brain className="w-8 h-8" /> },
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
      'AI agents analyze user queries and plan multi-step research workflows',
      'Security policies ensure users only see data they have permission to access',
      'Results delivered with full source attribution and confidence scoring'
    ]
  },
  {
    id: 'ai-implementation',
    title: 'AI Implementation Strategy',
    type: 'content',
    icon: <Brain className="w-8 h-8" />,
    bullets: [
      'Semantic Search: Vector embeddings for conceptual understanding',
      'Entity Recognition: PE-specific term and relationship extraction',
      'Intelligent Ranking: Context-aware relevance scoring',
      'Research Agents: Multi-step autonomous analysis workflows',
      'Citation Engine: Full source tracking and audit trails',
      'Conversation Memory: Session context for follow-up queries'
    ]
  },
  {
    id: 'autonomous-agents',
    title: 'Autonomous Research Agents',
    subtitle: 'AI That Researches Like Expert Analysts',
    type: 'content',
    icon: <Bot className="w-8 h-8" />,
    bullets: [
      'Research Planning: Breaks complex questions into structured research tasks automatically',
      'Multi-Source Analysis: Intelligently searches across internal and external data sources',
      'Adaptive Learning: Refines search strategy based on findings and iterates until complete',
      'Comprehensive Reports: Delivers analysis with full citations and confidence scoring'
    ]
  },
  {
    id: 'research-workflow',
    title: 'Research Workflow Example',
    subtitle: 'How AI Transforms Deal Analysis',
    type: 'flow',
    steps: [
      'Query Understanding: AI interprets "Analyze fintech acquisition targets" and creates research plan',
      'Information Gathering: Searches internal CRM, external databases, news sources, and market reports',
      'Analysis & Synthesis: Identifies patterns, evaluates opportunities, and assesses strategic fit',
      'Report Generation: Delivers comprehensive memo with executive summary and detailed findings'
    ]
  },
  {
    id: 'challenges-solutions',
    title: 'Top 3 Challenges & Solutions',
    type: 'challenges',
    items: [
      { 
        challenge: 'Manual research takes weeks',
        solution: 'Autonomous AI agents complete comprehensive analysis in hours',
        icon: <Clock className="w-8 h-8" />
      },
      {
        challenge: 'Information scattered across systems',
        solution: 'Unified search with intelligent source prioritization',
        icon: <Search className="w-8 h-8" />
      },
      {
        challenge: 'Lack of audit trails',
        solution: 'Complete citation tracking and confidence scoring for compliance',
        icon: <FileText className="w-8 h-8" />
      }
    ]
  },
  {
    id: 'enact-protocol',
    title: 'Extensibility Through Enact Protocol',
    subtitle: 'Transform Any Tool into an AI Capability',
    type: 'enact-example',
    benefits: [
      'Rapid Integration: Add new data sources and capabilities in hours',
      'No Code Required: Define tools with simple configuration files',
      'Built-in Security: Automatic authentication and permission handling',
      'Community Ecosystem: Share and leverage PE-specific research tools'
    ],
    example: {
      name: 'sourceco/crm/salesforce-deals',
      description: 'Extract deal pipeline and relationship data',
      authentication: 'oauth2',
      endpoints: ['deals', 'contacts', 'opportunities']
    }
  },
  {
    id: 'pe-tools',
    title: 'PE-Specific Tool Examples',
    type: 'tool-categories',
    categories: [
      { 
        name: 'Data Sources', 
        tools: ['CRM Extractors', 'Document Parsers', 'Email Analyzers', 'Financial Data APIs'],
        icon: <Database className="w-8 h-8" />
      },
      { 
        name: 'Research Tools', 
        tools: ['Market Analyzers', 'Comparable Deal Finders', 'Industry Report Processors'],
        icon: <Search className="w-8 h-8" />
      },
      { 
        name: 'Analysis Agents', 
        tools: ['Due Diligence Assistants', 'Valuation Modelers', 'Risk Assessors'],
        icon: <Brain className="w-8 h-8" />
      },
      { 
        name: 'Workflow Automation', 
        tools: ['Pipeline Trackers', 'Report Generators', 'Alert Systems'],
        icon: <Workflow className="w-8 h-8" />
      }
    ]
  },
  {
    id: 'roadmap',
    title: '12-Month Implementation Roadmap',
    type: 'timeline',
    phases: [
      { month: '0-3', title: 'Foundation', items: ['Core search infrastructure', 'basic AI research agents', 'key data connectors'], color: 'from-blue-400 to-blue-600' },
      { month: '3-6', title: 'Enhancement', items: ['Advanced research workflows', 'citation systems', 'tool marketplace'], color: 'from-purple-400 to-purple-600' },
      { month: '6-9', title: 'Optimization', items: ['Multi-step autonomous agents', 'conversation memory', 'performance tuning'], color: 'from-pink-400 to-pink-600' },
      { month: '9-12', title: 'Scale', items: ['Full autonomous capabilities', 'community tool ecosystem', 'advanced analytics'], color: 'from-green-400 to-green-600' }
    ]
  },
  {
    id: 'quick-wins',
    title: '90-Day Quick Wins',
    type: 'quick-wins',
    wins: [
      { title: 'Smart Search', desc: 'Semantic search across all documents and data', icon: <Search className="w-6 h-6" /> },
      { title: 'Research Assistant', desc: 'Basic AI-powered market and company analysis', icon: <Bot className="w-6 h-6" /> },
      { title: 'Citation Tracking', desc: 'Full source attribution for compliance', icon: <FileText className="w-6 h-6" /> },
      { title: 'Tool Integration', desc: 'First 10 Enact tools for common workflows', icon: <GitBranch className="w-6 h-6" /> },
      { title: 'User Dashboard', desc: 'Personalized research hub with saved queries', icon: <Activity className="w-6 h-6" /> }
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
    type: 'content',
    icon: <Star className="w-8 h-8" />,
    bullets: [
      'Network Effects: Each new tool increases platform value for all users',
      'Democratization: Business users create research workflows without technical skills',
      'Industry Leadership: Position as the go-to PE research automation platform',
      'Future-Proof: Any new AI model can leverage existing tool ecosystem'
    ]
  },
  {
    id: 'success-metrics',
    title: 'Success Metrics Dashboard',
    type: 'metrics',
    metrics: [
      { title: 'Research Quality', value: '95%', desc: 'user satisfaction with AI-generated analysis', icon: <Award className="w-6 h-6" /> },
      { title: 'Time Savings', value: '80%', desc: 'reduction in manual research time', icon: <Clock className="w-6 h-6" /> },
      { title: 'Tool Adoption', value: '50+', desc: 'active Enact tools in ecosystem', icon: <GitBranch className="w-6 h-6" /> },
      { title: 'Platform Usage', value: '90%', desc: 'daily active users across deal teams', icon: <Users className="w-6 h-6" /> }
    ]
  },
  {
    id: 'future-vision',
    title: 'The Future is Intelligent & Practical',
    type: 'content',
    icon: <Lightbulb className="w-8 h-8" />,
    bullets: [
      'AI agents that research like expert analysts, available 24/7',
      'Simple, reliable infrastructure that just works',
      'Complete transparency with citations and audit trails',
      'Extensible platform growing through community contributions',
      'Focus on results, not technology complexity'
    ]
  }
];
